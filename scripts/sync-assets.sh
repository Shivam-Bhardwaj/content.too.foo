#!/bin/bash
# Sync assets to content server
# Usage: ./scripts/sync-assets.sh [topic_id] [asset_type]
# Examples:
#   ./scripts/sync-assets.sh 001 midjourney   # Sync topic 001 midjourney assets
#   ./scripts/sync-assets.sh 042 all          # Sync all assets for topic 042
#   ./scripts/sync-assets.sh all              # Sync everything

SERVER="content@144.126.145.3"
SSH_KEY="$HOME/.ssh/content_too_foo"
REMOTE_BASE="/home/content/assets/content"
LOCAL_ASSETS="./assets"

TOPIC="${1:-all}"
TYPE="${2:-all}"

# Check SSH key exists
if [ ! -f "$SSH_KEY" ]; then
    echo "Error: SSH key not found at $SSH_KEY"
    echo "Generate one with: ssh-keygen -t ed25519 -f $SSH_KEY"
    exit 1
fi

# Create local assets directory if needed
mkdir -p "$LOCAL_ASSETS"

echo "Syncing to $SERVER..."
echo "Topic: $TOPIC, Type: $TYPE"

if [ "$TOPIC" = "all" ]; then
    rsync -avz --progress -e "ssh -i $SSH_KEY" \
        "$LOCAL_ASSETS/" \
        "$SERVER:$REMOTE_BASE/"
else
    PADDED=$(printf "%03d" "$TOPIC")

    # Create local structure if it doesn't exist
    mkdir -p "$LOCAL_ASSETS/$PADDED"/{midjourney,runway,final}

    if [ "$TYPE" = "all" ]; then
        rsync -avz --progress -e "ssh -i $SSH_KEY" \
            "$LOCAL_ASSETS/$PADDED/" \
            "$SERVER:$REMOTE_BASE/$PADDED/"
    else
        rsync -avz --progress -e "ssh -i $SSH_KEY" \
            "$LOCAL_ASSETS/$PADDED/$TYPE/" \
            "$SERVER:$REMOTE_BASE/$PADDED/$TYPE/"
    fi
fi

# Update status
ssh -i "$SSH_KEY" "$SERVER" "echo '{\"last_sync\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"}' > $REMOTE_BASE/status.json"

echo "Sync complete!"

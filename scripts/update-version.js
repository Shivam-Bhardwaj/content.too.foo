#!/usr/bin/env node

/**
 * update-version.js
 *
 * Updates public/version.json with current git commit info.
 * Run this before deploying to keep the version banner current.
 *
 * Usage:
 *   node scripts/update-version.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const REPO_URL = 'https://github.com/Shivam-Bhardwaj/content.too.foo';

function getGitInfo() {
  try {
    const commitShaFull = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();
    const commitSha = commitShaFull.substring(0, 7);
    const commitMessage = execSync('git log -1 --pretty=%s', { encoding: 'utf8' }).trim();
    const commitDate = execSync('git log -1 --pretty=%cI', { encoding: 'utf8' }).trim();
    const branch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();

    return {
      commit_sha: commitSha,
      commit_sha_full: commitShaFull,
      commit_url: `${REPO_URL}/commit/${commitShaFull}`,
      commit_message: commitMessage,
      updated_at: commitDate,
      branch: branch
    };
  } catch (error) {
    console.error('Error getting git info:', error.message);
    process.exit(1);
  }
}

function main() {
  const versionPath = path.join(__dirname, '..', 'public', 'version.json');
  const versionInfo = getGitInfo();

  fs.writeFileSync(versionPath, JSON.stringify(versionInfo, null, 2) + '\n');

  console.log('✅ Updated version.json');
  console.log(`   Commit: ${versionInfo.commit_sha} - ${versionInfo.commit_message}`);
  console.log(`   Date: ${versionInfo.updated_at}`);
  console.log(`   Branch: ${versionInfo.branch}`);
}

main();

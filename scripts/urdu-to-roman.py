#!/usr/bin/env python3
"""
Urdu to Roman transliteration for Whisper output.
Converts Urdu/Arabic script Hindi to readable Romanized Hindi.
"""

import sys
import re

# Comprehensive Urdu to Roman mapping
URDU_TO_ROMAN = {
    # Vowels and vowel marks
    'ا': 'a', 'آ': 'aa', 'أ': 'a', 'إ': 'i', 'ٱ': 'a',
    'و': 'o', 'ؤ': 'o', 'ۆ': 'o',
    'ی': 'i', 'ي': 'i', 'ے': 'e', 'ئ': 'i', 'ۓ': 'e',
    'ٰ': 'a', 'ٖ': 'i', 'ٗ': 'u',
    'َ': 'a', 'ِ': 'i', 'ُ': 'u', 'ً': 'an', 'ٍ': 'in', 'ٌ': 'un',
    'ّ': '', 'ْ': '', 'ٔ': '', 'ٕ': '',

    # Consonants
    'ب': 'b', 'پ': 'p', 'ت': 't', 'ٹ': 't', 'ث': 's',
    'ج': 'j', 'چ': 'ch', 'ح': 'h', 'خ': 'kh',
    'د': 'd', 'ڈ': 'd', 'ذ': 'z', 'ر': 'r', 'ڑ': 'r',
    'ز': 'z', 'ژ': 'zh', 'س': 's', 'ش': 'sh',
    'ص': 's', 'ض': 'z', 'ط': 't', 'ظ': 'z',
    'ع': "'", 'غ': 'gh', 'ف': 'f', 'ق': 'q',
    'ک': 'k', 'ك': 'k', 'گ': 'g', 'ل': 'l',
    'م': 'm', 'ن': 'n', 'ں': 'n', 'ڻ': 'n',
    'ہ': 'h', 'ه': 'h', 'ھ': 'h', 'ء': "'",

    # Special combinations (handled separately)
    'ے': 'e', 'ۂ': 'ah', 'ۃ': 'h',

    # Punctuation
    '۔': '.', '،': ',', '؟': '?', '؛': ';', '٪': '%',

    # Numbers
    '۰': '0', '۱': '1', '۲': '2', '۳': '3', '۴': '4',
    '۵': '5', '۶': '6', '۷': '7', '۸': '8', '۹': '9',

    # Common ligatures
    'ﻻ': 'la', 'ﻷ': 'la', 'ﻹ': 'li', 'ﻵ': 'laa',
}

# Common word corrections for Hindi
WORD_FIXES = {
    'bori': 'body',
    'bodi': 'body',
    'boori': 'body',
    'tmhari': 'tumhari',
    'tmhri': 'tumhari',
    'oiksin': 'vaccine',
    'oaiksin': 'vaccine',
    'oirs': 'virus',
    'oairs': 'virus',
    'biktiria': 'bacteria',
    'bktiria': 'bacteria',
    'sls': 'cells',
    'sl': 'cell',
    'anoirr': 'invader',
    'anoidr': 'invader',
    'anfikshn': 'infection',
    'infkshn': 'infection',
    'antbodi': 'antibody',
    'antboriz': 'antibodies',
    'mimri': 'memory',
    'miri': 'memory',
    'prminn': 'permanent',
    'prminnt': 'permanent',
    'mintli': 'mentally',
    'mntli': 'mentally',
    'mkanizm': 'mechanism',
    'protin': 'protein',
    'targt': 'target',
    'ionik': 'unique',
    'chit': 'cheat',
    'hk': 'hack',
    'gart': 'guard',
    'garts': 'guards',
    'porio': 'polio',
    'chkn': 'chicken',
    'paks': 'pox',
    'soldr': 'soldier',
    'soljr': 'soldier',
    'soljrz': 'soldiers',
    'aarmi': 'army',
    'armi': 'army',
}

def transliterate(text):
    """Convert Urdu script to Roman."""
    result = []

    for char in text:
        if char in URDU_TO_ROMAN:
            result.append(URDU_TO_ROMAN[char])
        elif char.isascii():
            result.append(char)
        elif char.isspace():
            result.append(char)
        # Skip unknown characters

    return ''.join(result)

def fix_words(text):
    """Apply common word corrections."""
    words = text.split()
    fixed = []

    for word in words:
        lower = word.lower()
        if lower in WORD_FIXES:
            # Preserve capitalization
            if word[0].isupper():
                fixed.append(WORD_FIXES[lower].capitalize())
            else:
                fixed.append(WORD_FIXES[lower])
        else:
            fixed.append(word)

    return ' '.join(fixed)

def clean_text(text):
    """Clean up the romanized text."""
    # Remove multiple spaces
    text = re.sub(r'\s+', ' ', text)
    # Remove orphan apostrophes
    text = re.sub(r"\s*'\s*", '', text)
    # Fix spacing around punctuation
    text = re.sub(r'\s+([.,!?])', r'\1', text)
    # Capitalize first letter of sentences
    text = '. '.join(s.strip().capitalize() for s in text.split('.') if s.strip())
    if text and not text.endswith('.'):
        text += '.'
    return text.strip()

def urdu_to_roman(text):
    """Full conversion pipeline."""
    roman = transliterate(text)
    roman = fix_words(roman)
    roman = clean_text(roman)
    return roman

if __name__ == '__main__':
    if len(sys.argv) > 1:
        # Read from file
        with open(sys.argv[1], 'r', encoding='utf-8') as f:
            text = f.read()
    else:
        # Read from stdin
        text = sys.stdin.read()

    print(urdu_to_roman(text))

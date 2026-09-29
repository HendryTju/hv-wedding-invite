import sys
from PIL import Image
import imagehash
import glob

def get_hash(image_path):
    return imagehash.average_hash(Image.open(image_path))

target_hash = get_hash('src/assets/images/hero-couple.png')
best_match = None
min_diff = float('inf')

for path in glob.glob('src/assets/images/*.jpg') + glob.glob('src/assets/images/*.JPEG'):
    if 'hero-couple' in path: continue
    diff = target_hash - get_hash(path)
    if diff < min_diff:
        min_diff = diff
        best_match = path

print(f"Best match: {best_match} (diff: {min_diff})")

import sys
from PIL import Image
import glob

def get_thumb(path):
    img = Image.open(path).convert('L').resize((16, 16))
    return list(img.getdata())

target = get_thumb('src/assets/images/hero-couple.png')
best_match = None
min_diff = float('inf')

for path in glob.glob('src/assets/images/*.jpg') + glob.glob('src/assets/images/*.JPEG'):
    if 'hero-couple' in path: continue
    thumb = get_thumb(path)
    diff = sum(abs(a - b) for a, b in zip(target, thumb))
    if diff < min_diff:
        min_diff = diff
        best_match = path

print(f"Best match: {best_match} (diff: {min_diff})")

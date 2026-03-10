import os
from PIL import Image, ImageDraw, ImageFont, ImageOps

def fix_og_image(input_path, output_path, cta_text="Ζητήστε Προσφορά"):
    """
    Resizes an image to 1200x630 and adds a CTA overlay.
    """
    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found.")
        return

    # 1. Open and Resize/Crop to 1200x630
    img = Image.open(input_path)
    target_size = (1200, 630)
    
    # ImageOps.fit crops and scales the image to fill the target size perfectly
    img = ImageOps.fit(img, target_size, centering=(0.5, 0.5))

    # 2. Add a CTA Overlay (Semi-transparent bar at the bottom)
    draw = ImageDraw.Draw(img, "RGBA")
    bar_height = 80
    overlay_color = (0, 0, 0, 160)  # Black with 160/255 transparency
    draw.rectangle([0, 630 - bar_height, 1200, 630], fill=overlay_color)

    # 3. Load Font and Draw Text
    # Try to find a system font with good Greek support
    font = None
    font_paths = [
        "C:\\Windows\\Fonts\\tahoma.ttf",      # Excellent Greek support
        "C:\\Windows\\Fonts\\verdana.ttf",     # Great readability
        "C:\\Windows\\Fonts\\arial.ttf",       # Standard
        "C:\\Windows\\Fonts\\seguiemj.ttf",    # Segoe UI
        "C:\\Windows\\Fonts\\times.ttf"        # Times New Roman
    ]
    
    for path in font_paths:
        if os.path.exists(path):
            try:
                font = ImageFont.truetype(path, 40)
                print(f"Using font: {path}")
                break
            except:
                continue
                
    if font is None:
        print("Warning: Could not find suitable Greek font, using default (may show squares).")
        font = ImageFont.load_default()

    # Center the text
    text_bbox = draw.textbbox((0, 0), cta_text, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    
    text_x = (1200 - text_width) // 2
    text_y = (630 - bar_height) + (bar_height - text_height) // 2 - 5 # Slight adjustment
    
    draw.text((text_x, text_y), cta_text, font=font, fill=(255, 255, 255, 255))

    # 4. Save
    img.convert("RGB").save(output_path, "JPEG", quality=95)
    print(f"Success: Fixed image saved to {output_path}")

if __name__ == "__main__":
    # Target the OG image
    input_img = "public/og-image-v2.jpg"
    output_img = "public/og-image-v2-fixed.jpg"
    
    fix_og_image(input_img, output_img, "Smarting.gr | Ζητήστε Προσφορά Τώρα")

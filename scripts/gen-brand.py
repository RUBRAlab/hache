"""Genera og-image.png y los iconos de marca de Julia H.

Correr solo si cambia la identidad visual:

    pip install pillow
    curl -sL -o /tmp/Playfair.ttf "https://github.com/google/fonts/raw/main/ofl/playfairdisplay/PlayfairDisplay%5Bwght%5D.ttf"
    curl -sL -o /tmp/Inter.ttf "https://github.com/google/fonts/raw/main/ofl/inter/Inter%5Bopsz,wght%5D.ttf"
    python3 scripts/gen-brand.py
"""
import pathlib

from PIL import Image, ImageDraw, ImageFilter, ImageFont

WARM_WHITE = (247, 246, 243)
SOFT_BLACK = (28, 28, 26)
SMOKE = (106, 106, 104)
BODY = (74, 74, 72)

YELLOW = (239, 225, 183)
PEACH = (245, 212, 204)
SAGE = (219, 228, 183)
MINT = (226, 236, 207)

PLAYFAIR = "/tmp/Playfair.ttf"
INTER = "/tmp/Inter.ttf"


def font(path, size, weight):
    f = ImageFont.truetype(path, size)
    axes = f.get_variation_axes()
    # el eje de peso es el ultimo en ambas familias
    vals = [a["default"] for a in axes]
    vals[-1] = weight
    f.set_variation_by_axes(vals)
    return f


def pastel_background(w, h, scale=1.0):
    """Fondo warm white con blobs pastel difuminados, como el sitio."""
    layer = Image.new("RGB", (w, h), WARM_WHITE)
    d = ImageDraw.Draw(layer)
    blobs = [
        (PEACH, 0.78, -0.16, 0.62),
        (SAGE, -0.12, 0.66, 0.66),
        (YELLOW, 0.18, 0.12, 0.50),
        (MINT, 0.95, 0.92, 0.46),
    ]
    for color, cx, cy, r in blobs:
        rx, ry = r * w * 0.6, r * w * 0.6
        x, y = cx * w, cy * h
        d.ellipse([x - rx, y - ry, x + rx, y + ry], fill=color)
    layer = layer.filter(ImageFilter.GaussianBlur(int(90 * scale)))
    return Image.blend(Image.new("RGB", (w, h), WARM_WHITE), layer, 0.62)


def draw_h(d, x, y, w, h, stroke, color=SOFT_BLACK):
    """El monograma H: dos pilares y el puente."""
    d.rectangle([x, y, x + stroke, y + h], fill=color)
    d.rectangle([x + w - stroke, y, x + w, y + h], fill=color)
    d.rectangle([x, y + h / 2 - stroke / 2, x + w, y + h / 2 + stroke / 2], fill=color)


def tracked_text(d, xy, text, f, fill, tracking):
    """PIL no tiene letter-spacing: dibujamos caracter por caracter."""
    x, y = xy
    for ch in text:
        d.text((x, y), ch, font=f, fill=fill)
        x += d.textlength(ch, font=f) + tracking
    return x - tracking


def tracked_width(d, text, f, tracking):
    return sum(d.textlength(c, font=f) for c in text) + tracking * (len(text) - 1)


# ---------------------------------------------------------------- OG image
W, H = 1200, 630
img = pastel_background(W, H)
d = ImageDraw.Draw(img)

draw_h(d, 96, 196, 168, 238, 40)

TX = 336
f_name = font(PLAYFAIR, 104, 500)
f_role = font(INTER, 21, 600)
f_tag = font(INTER, 29, 400)

d.text((TX, 186), "JULIA H", font=f_name, fill=SOFT_BLACK)
tracked_text(d, (TX + 4, 320), "CONSULTORA", f_role, SMOKE, 7)
d.rectangle([TX + 4, 372, TX + 84, 373], fill=(168, 163, 157))
d.text((TX, 404), "Consultoría de gestión para pymes,", font=f_tag, fill=BODY)
d.text((TX, 444), "bodegas y empresas familiares.", font=f_tag, fill=BODY)

OUT = str(pathlib.Path(__file__).resolve().parent.parent / "public") + "/"
img.save(OUT + "og-image.png", optimize=True)

# ---------------------------------------------------------------- iconos


def icon(size):
    s = size * 4  # supersampling para bordes limpios
    ic = Image.new("RGB", (s, s), WARM_WHITE)
    di = ImageDraw.Draw(ic)
    pad_x, pad_y = s * 0.26, s * 0.17
    draw_h(di, pad_x, pad_y, s - 2 * pad_x, s - 2 * pad_y, s * 0.135)
    return ic.resize((size, size), Image.LANCZOS)


icon(180).save(OUT + "apple-touch-icon.png", optimize=True)
icon(64).save(OUT + "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])

with open(OUT + "favicon.svg", "w") as fh:
    fh.write(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">'
        '<rect width="32" height="32" fill="#F7F6F3"/>'
        '<g fill="#1C1C1A">'
        '<rect x="8" y="5" width="4.4" height="22"/>'
        '<rect x="19.6" y="5" width="4.4" height="22"/>'
        '<rect x="8" y="13.8" width="16" height="4.4"/>'
        "</g></svg>\n"
    )

print("ok")

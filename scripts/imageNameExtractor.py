from pathlib import Path

base = Path(r"C:\Users\DELL\Downloads\bossdent-web-dev\bossdent-web-dev\public\images\products")

print("=" * 80)
print("GC")
print("=" * 80)

gc = sorted((base / "gc").glob("*"))

for i, f in enumerate(gc, 1):
    if f.suffix.lower() in [".jpg", ".jpeg", ".png", ".webp"]:
        print(f"{i:02d}. {f.name}")

print()

print("=" * 80)
print("SAFE ENDO")
print("=" * 80)

safe = sorted((base / "safe-endo").glob("*"))

for i, f in enumerate(safe, 1):
    if f.suffix.lower() in [".jpg", ".jpeg", ".png", ".webp"]:
        print(f"{i:02d}. {f.name}")

print()

print("=" * 80)
print("TOTAL")
print("=" * 80)

print(f"GC Images       : {len([f for f in gc if f.suffix.lower() in ['.jpg','.jpeg','.png','.webp']])}")
print(f"SAFE ENDO Images: {len([f for f in safe if f.suffix.lower() in ['.jpg','.jpeg','.png','.webp']])}")
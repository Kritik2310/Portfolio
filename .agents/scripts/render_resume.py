import fitz
from pathlib import Path

pdf_path = Path("attached_assets/Resume__-_Kriti_Kashyap_1788446112881.pdf")
output_dir = Path(".agents/outputs/resume-pages")
output_dir.mkdir(parents=True, exist_ok=True)

document = fitz.open(pdf_path)
for page_number, page in enumerate(document, start=1):
    pixmap = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
    output_path = output_dir / f"page-{page_number}.png"
    pixmap.save(output_path)
    print(output_path)
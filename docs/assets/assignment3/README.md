# Assignment 3 assets — image filenames and instructions

Paste the images you want shown on the Assignment 3 page into this folder.

## Required / primary filenames (the HTML page uses these names):

- `assignment3_comparison.png`       # Main comparison chart (accuracy by feature extractor × classifier). Recommended: 1000×420
- `assignment3_samples.png`          # Sample grid of images (recommended: 800×400 or similar)
- `assignment3_label_dist.png`       # Label distribution / bar chart (recommended: 800×400)
- `assignment3_confusion.png`        # Confusion matrix (recommended: 800×600)

## Additional recommended visuals (optional):

- `assignment3_training_curve.png`   # Training accuracy & loss curves (recommended: 800×400)
- `assignment3_tsne.png`             # t-SNE / UMAP visualization of extracted features (recommended: 800×600)
- `assignment3_inference_scatter.png`# Inference time vs accuracy scatter (recommended: 800×400)

## Notes

- Image formats supported: PNG, JPG. Prefer PNG for crisp plots and transparency.
- Sizes: keep width <= 1200px for best layout; 800–1000px wide is ideal for most charts.
- After adding images, open `docs/assignment3.html` in a browser and refresh to view them.

## Which notebook cell produces which image (guidance)

- `assignment3_samples.png`: produced by `show_sample_grid(...)` in `BTL3_traditional.ipynb` (EDA section).
- `assignment3_label_dist.png`: produced by `show_label_distribution(...)` in `BTL3_traditional.ipynb` (EDA section).
- `assignment3_training_curve.png`: produced by training cells (plot training accuracy & loss) in `BTL3_deep_learning.ipynb` or training code in `BTL3_traditional.ipynb` if available.
- `assignment3_confusion.png`: produced by `plot_confusion_matrix(...)` after evaluation in `BTL3_traditional.ipynb`.
- `assignment3_comparison.png`: produced by `plot_comparison_results(...)` or by building a bar chart from `comparison_results.json` in `BTL3_traditional.ipynb`.
- `assignment3_tsne.png`: generated from a t-SNE/UMAP projection of extracted features (not present by default but recommended to add a cell to produce it).
- `assignment3_inference_scatter.png`: produced by `plot_comparison_results(...)` scatter plot (Inference Time vs Accuracy) in `BTL3_traditional.ipynb`.

## Do you want me to automatically save images when running notebooks?

If you want, I can add a few small helper cells to the notebooks that save the main plots as PNG into `docs/assets/assignment3/` (e.g., `plt.savefig('docs/assets/assignment3/assignment3_comparison.png', bbox_inches='tight')`). Tell me if you want these added to `BTL3_traditional.ipynb`, `BTL3_deep_learning.ipynb`, or both.

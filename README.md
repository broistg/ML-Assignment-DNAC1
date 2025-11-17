# BÀI TẬP LỚN MÔN HỌC: HỌC MÁY (CO3117)

**Lớp:** TN01  
**Học kỳ:** 251  
**Năm học:** 2025-2026

## Giảng viên hướng dẫn (GVHD)

- Họ tên: TS. Lê Thành Sách
- Email: <ltsach@hcmut.edu.vn>

## Thông tin các thành viên nhóm

| Họ tên              | Mã số sinh viên | Email                            |
| ------------------- | --------------- | -------------------------------- |
| Cao Hữu Thiên Hoàng | 2311030         | <hoang.cao2510@hcmut.edu.vn>     |
| Lê Tiến Đạt         | 2310653         | <dat.le2005@hcmut.edu.vn>        |
| Trần Vĩnh Dũng      | 2310574         | <dung.tranvinh2005@hcmut.edu.vn> |

## Mục tiêu của bài tập lớn

- Vận dụng kiến thức đã học để xây dựng pipeline học máy truyền thống và học sâu nhằm xử lý và phân tích các loại tập dữ liệu khác nhau bao gồm dạng bảng, văn bản và hình ảnh.
- Pipeline bao gồm quy trình xử lý dữ liệu, trích xuất đặc trưng, huấn luyện mô hình và đánh giá kết quả. Qua đó, sinh viên sẽ nắm vững các bước cơ bản trong việc triển khai một hệ thống học máy hiệu quả.

## Hướng dẫn chạy notebook

1. **Yêu cầu môi trường:**

   - Google Colab (khuyến nghị) hoặc môi trường Python 3.12+
   - Các thư viện cần thiết sẽ được cài tự động trong notebook:
     - scikit-learn
     - pandas
     - numpy
     - scipy
     - plotly
     - seaborn
     - torch, torchvision
     - wget

2. **Cách tải dữ liệu:**
   - Tập dữ liệu Adult Census Income của BTL 1 được tải tự động trong notebook từ UCI Machine Learning Repository:
     - adult.data và adult.test (gộp lại để chia thành Train / Validation / Test)
     - Link gốc: [Adult Census Income Train](https://archive.ics.uci.edu/ml/machine-learning-databases/adult/adult.data) và [Adult Census Income Test](https://archive.ics.uci.edu/ml/machine-learning-databases/adult/adult.test)
   - Tập dữ liệu 20 Newsgroups của BTL 2 được tải tự động trong notebook từ trang chủ của Jason Rennie lưu trữ lại:
     - 20news-18828 (dùng để chia thành Train / Validation / Test)
     - Link gốc: [20 Newsgroups](http://qwone.com/~jason/20Newsgroups/)
   - Tập dữ liệu CIFAR-10 của BTL 3 được tải tự động trong notebook từ thư viện `torchvision`:
     - train subset (dùng để chia thành Train / Validation) và test subset
     - Link gốc: [CIFAR-10](https://www.cs.toronto.edu/~kriz/cifar.html)
3. **Chạy notebook bằng Google Colab:**
   1. Mở notebook trên Google Colab.
   2. Chọn **Runtime** → **Run all**.
   3. Toàn bộ quy trình (cài thư viện, tải dữ liệu, huấn luyện, đánh giá) sẽ chạy tự động.
4. **Chạy notebook local:**
   1. Tạo virtual environment (khuyến nghị):

      ```bash
      python -m venv venv
      source venv/bin/activate   # Linux/Mac
      venv\Scripts\activate      # Windows
      ```

   2. Cài đặt dependencies:

      ```bash
      pip install -r requirements.txt
      ```

   3. Chạy notebook bằng Jupyter:

      ```bash
      cd notebooks
      jupyter notebook notebook_name.ipynb
      ```

## Cấu trúc thư mục dự án

```text
ML-Assignment-DNAC1/
├── docs/            # Thông tin Github Page
├── features/        # Các file đặc trưng được trích xuất
├── modules/         # Các module hỗ trợ
├── notebooks/       # Notebook Jupyter để cấu hình và chạy
├── reports/         # Báo cáo, kết quả, hình ảnh
├── requirements.txt # Yêu cầu về thư viện
└── README.md        # Tài liệu này
```

## Báo cáo và notebook Colab

1. **Notebook BTL1 (Adult Census Income):**

   - Pipeline truyền thống: [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/broistg/ML-Assignment-DNAC1/blob/main/notebooks/BTL1_traditional.ipynb)
   - Pipeline học sâu: [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/broistg/ML-Assignment-DNAC1/blob/main/notebooks/BTL1_deep_learning.ipynb)

2. **Notebook BTL2 (20 Newsgroups):**

   - Pipeline truyền thống: [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/broistg/ML-Assignment-DNAC1/blob/main/notebooks/BTL2_traditional.ipynb)
   - Pipeline học sâu: [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/broistg/ML-Assignment-DNAC1/blob/main/notebooks/BTL2_deep_learning.ipynb)

3. **Notebook BTL3 (CIFAR-10):**

   - Pipeline truyền thống: [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/broistg/ML-Assignment-DNAC1/blob/main/notebooks/BTL3_traditional.ipynb)
   - Pipeline học sâu: [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/broistg/ML-Assignment-DNAC1/blob/main/notebooks/BTL3_deep_learning.ipynb)

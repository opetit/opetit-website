---
title: "Iterative Confidence Relabeling with Deep ConvNets for Organ Segmentation with Partial Labels"
authors:
    - Olivier Petit
    - Nicolas Thome
    - Luc Soler
year: "2021"
resources:
    - name: "graphical_abstract"
      src: "INERRANT_550x180.png"
      params:
        alt: "INNERANT grahical abstract"      
journal:
    link: "https://doi.org/10.1016/j.compmedimag.2021.101938"
    text: "Computerized Medical Imaging and Graphics, 2021"
link: "https://hal.science/hal-03243619v1/file/CMIG_INERRANT.pdf"
weight: 4
layout: "publication"
---

Training deep ConvNets requires large labeled datasets. However, collecting pixel-level labels for medical image segmentation is very expensive and requires a high level of expertise. In addition, most existing segmentation masks provided by clinical experts focus on specific anatomical structures. In this paper, we propose a method dedicated to handle such partially labeled medical image datasets. We propose a strategy to identify pixels for which labels are correct, and to train Fully Convolutional Neural Networks with a multi-label loss adapted to this context. In addition, we introduce an iterative confidence self-training approach inspired by curriculum learning to relabel missing pixel labels, which relies on selecting the most confident prediction with a specifically designed confidence network that learns an uncertainty measure which is leveraged in our relabeling process. Our approach, INERRANT for Iterative coNfidencE Relabeling of paRtial ANnoTations, is thoroughly evaluated on two public datasets (TCAI and LITS), and one internal dataset with seven abdominal organ classes. We show that INERRANT robustly deals with partial labels, performing similarly to a model trained on all labels even for large missing label proportions. We also highlight the importance of our iterative learning scheme and the proposed confidence measure for optimal performance. Finally we show a practical use case where a limited number of completely labeled data are enriched by publicly available but partially labeled data.
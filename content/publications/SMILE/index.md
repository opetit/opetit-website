---
title: "Handling Missing Annotations for Semantic Segmentation with Deep ConvNets."
authors:
    - Olivier Petit
    - Nicolas Thome
    - Arnaud Charnoz
    - Alexandre Hostettler 
    - Luc Soler
year: "2018"
resources:
    - name: "graphical_abstract"
      src: "missing_annotation_illustration_550x180.png"
      params:
        alt: "SMILE grahical abstract"      
journal:
    link: "https://cs.adelaide.edu.au/~dlmia4/"
    text: "MICCAI 2018 workshop DLMIA"
link: "https://hal.science/hal-02471187/file/handling_missing_annotations_DLMIA_MICCAI_2018(1).pdf"
weight: 6
layout: "publication"
---

Annotation of medical images for semantic segmentation is a very time consuming and difficult task. Moreover, clinical experts often focus on specific anatomical structures and thus, produce partially annotated images. In this paper, we introduce SMILE, a new deep convolutional neural network which addresses the issue of learning with incomplete ground truth. SMILE aims to identify ambiguous labels in order to ignore them during training, and don't propagate incorrect or noisy information. A second contribution is SMILEr which uses SMILE as initialization for automatically relabeling missing annotations, using a curriculum strategy. Experiments on 3 organ classes (liver, stomach, pancreas) show the relevance of the proposed approach for semantic segmentation: with 70% of missing annotations, SMILEr performs similarly as a baseline trained with complete ground truth annotations.

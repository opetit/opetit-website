---
title: "3D Spatial Priors for Semi-Supervised Organ Segmentation with Deep Convolutional Neural Networks"
authors:
    - Olivier Petit
    - Nicolas Thome
    - Luc Soler
year: "2021"
resources:
    - name: "graphical_abstract"
      src: "STIPPLE_550x180.png"
      params:
        alt: "STIPPLE grahical abstract"      
journal:
    link: "https://www.springer.com/journal/11548/"
    text: "IJCARS 2021"
link: "https://hal.science/hal-03337091/file/IJCARS_Prior_final.pdf"
weight: 2
layout: "publication"
---

**Purpose**: Fully Convolutional neural Networks (FCNs) are the most popular models for medical image segmentation. However, they do not explicitly integrate spatial organ positions, which can be crucial for proper labeling in challenging contexts.

**Methods**: In this work, we propose a method that combines a model representing prior probabilities of an organ position in 3D with visual FCN predictions by means of a generalized prior-driven prediction function. The prior is also used in a self-labeling process to handle low-data regimes, in order to improve the quality of the pseudo-label selection.

**Results**: Experiments carried out on CT scans from the public TCIA pancreas segmentation dataset reveal that the resulting STIPPLE model can significantly increase performances compared to the FCN baseline, especially with few training images. We also show that STIPPLE outperforms state-of-the-art semi-supervised segmentation methods by leveraging the spatial prior information.

**Conslusion**: STIPPLE provides a segmentation method effective with few labeled examples, which is crucial in the medical domain. It offers an intuitive way to incorporate absolute position information by mimicking expert annotators.
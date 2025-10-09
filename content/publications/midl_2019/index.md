---
title: "Biasing Deep ConvNets for Semantic Segmentation of Medical Images with a Prior-driven Prediction Function"
authors:
    - Olivier Petit
    - Nicolas Thome
    - Luc Soler
year: "2019"
resources:
    - name: "graphical_abstract"
      src: "midl_2019_550x180.png"
      params:
        alt: "MIDL Prior grahical abstract"      
journal:
    link: "https://2019.midl.io/"
    text: "MIDL 2019"
link: "https://openreview.net/pdf?id=rJlhOlRN5V"
weight: 5
layout: "publication"
---

Medical images like CT-scans are spatially structured because of the acquisition process. Each organ can be find at a very specific and standard position. In this work, we propose a method which takes advantage of this prior knowledge for the task of semantic segmentation. The prior is modeled as a probability map which represent the probability of an organ's presence given the position. The map is computed beforehand on the train set and then injected at the end of a Fully Convolutional neural Network (FCN) with a prior-driven softmax function. It enables us to eliminate irrelevant regions of the image and focus on the most probable ones. Experiments on the TCIA pancreas dataset show encouraging results with an improvement of 2.03 pt on the global Dice score.

---
authors:
- Olivier Petit
layout: publication
link: https://drive.google.com/file/d/1QvT9rzdITCWDFhyIbjxmZEDvGHUo1EgG/view?usp=sharing
title: Thesis "Semantic Segmentation of 3D Medical Images with Deep Learning"
weight: 1
year: "2021"
---

**Thesis Final Document**
--------------------------------

Deep Learning has recently shown impressive results in computer vision especially with the performances reached by convolutional neural networks (ConvNets). Those methods have redefined the state of the art in many applications such as medical image segmentation. In this thesis we address the problem of abdominal organ segmentation with deep learning models. More precisely, we first tackle the issue of training deep ConvNets on partially labeled datasets. Professionals often focus on a specific anatomical region leading to heterogeneous datasets with partially labeled images. However, training a segmentation model directly on such data leads to very poor results due to the presence of wrong labels for the missing organs. In our method, we propose a training scheme that leverages all the labels without being affected by wrong labels. Moreover, we propose an iterative scheme for progressively relabeling the missing organs in the training set in order to further improve the segmentation model. Secondly, we aim at using spatial prior about the position of the organs to improve the detection of structures and reduce outliers in the segmentation. It comes from the fact that ConvNets, which have been proposed for image classification, do not capture absolute spatial information. However, medical images are very structured and there are some conventions about the expected position of organs. In this work we propose a 3D spatial prior that captures the spatial position of organs and then explicitly biases the model through a prior-driven activation function. In addition to improving the segmentation of difficult organs, we show that using our spatial prior in a pseudo-labeling scheme preserves high performances even with few labeled images by mitigating the introduction of false positives.

Finally, we focus on Transformers models to model long range dependencies between anatomical structures in a classic segmentation model used for organ segmentation. Traditional ConvNets do not capture such interactions because of the receptive field which is often much smaller

than the input image. Using dense attention introduced in the Transformer model however, allows to connect every pixel with each other and thus to model complex interactions on different

parts of the input image. We show that it improves the quality of the segmentation on various datasets for every organ with a more interesting gain for difficult and complex organs.
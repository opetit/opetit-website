---
title: "Thesis \"Semantic Segmentation of 3D Medical Images with Deep Learning\""
authors:
    - Olivier Petit
year: "2021"
link: "https://drive.google.com/file/d/1QvT9rzdITCWDFhyIbjxmZEDvGHUo1EgG/view?usp=sharing"
weight: 1
layout: "publication"
---

**Manuscript final de thèse**
--------------------------------

L’apprentissage profond a récemment montré des résultats impressionnants en vision par ordinateur. En particulier avec les réseaux de neurones convolutifs (ConvNets) qui ont redéfini l’état-de-l’art dans de nombreuses applications telles que la segmentation d’images médicales. Dans cette thèse nous abordons des problèmes en segmentation d’organes de l’abdomen en utilisant ces modèles.

Premièrement, nous nous sommes intéressés à l’entrainement de ConvNets avec des bases de données partiellement étiquetées. Les professionnels se concentrant, souvent sur des régions anatomiques précises, les bases de données sont de ce fait hétérogènes et partiellement étiquetées. Entraîner un modèle de segmentation directement donne de très mauvais résultats. Nous proposons donc un schéma d’entrainement qui utilise toutes les étiquettes disponibles sans être affect´e par les mauvaises. De plus, un schéma itératif permet de progressivement ré-étiqueter les organes manquants ce qui permet d’améliorer encore notre modèle.

La seconde partie étudie l’utilisation d’un a priori spatial sur la position absolue des organes afin d’améliorer la détection des structures et réduire les erreurs aberrantes. Les ConvNets sont par construction incapables de capturer l’information de position spatiale absolue. Cependant, les images médicales sont très structurées et les positions des organes sont connues. Dans ces travaux nous proposons d’utiliser un a priori spatial 3Dqui capture la position des organes et qui va explicitement biaiser le modèle grâce à une fonction d’activation «prior-driven ».

Pour finir, nous étudions les Transformers qui permettent de mod´eliser des interactions à long terme entre les structures anatomiques dans un modèle de segmentation. Les ConvNets ne permettent pas de capturer ces interactions globales principalement `a cause de leur champ réceptif limité. Utiliser le mécanisme d’attention propose dans les Transformers permet de connecter tous les pixels entre eux, ayant pour effet de modéliser des interactions complexes. Nous proposons le modèle U-Transformer et montrons qu’il améliore la qualité de la segmentation sur plusieurs bases de données.
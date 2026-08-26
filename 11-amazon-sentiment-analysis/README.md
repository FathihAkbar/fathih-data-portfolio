# Amazon Customer Review Sentiment Analysis

## Overview

This project develops a Natural Language Processing (NLP) system to classify Amazon customer reviews into positive and negative sentiment.

The project uses TF-IDF to transform unstructured text into numerical features and compares several machine learning algorithms for binary sentiment classification.

The workflow covers text preprocessing, exploratory analysis, TF-IDF feature extraction, model comparison, hyperparameter tuning, feature interpretation, and error analysis.

The main objective is to automatically identify customer sentiment from review text and explore how the resulting classification can support large-scale customer feedback analysis.

## Objectives

- Understand the structure of customer review data
- Analyze sentiment distribution
- Clean and prepare textual data
- Combine review titles and review text
- Transform text into numerical features using TF-IDF
- Compare multiple machine learning algorithms
- Perform hyperparameter tuning
- Evaluate the final sentiment classification model
- Interpret the most influential words and phrases
- Analyze model errors
- Generate practical business insights

## Dataset

The dataset contains Amazon review information with the following main columns:

- `class_index`
- `review_title`
- `review_text`

The original dataset contains **480,066 reviews**.

The sentiment classes are represented by:

```text
1 → Negative
2 → Positive
# Credit Card Fraud Detection with Machine Learning

## Overview

This project develops a machine learning-based fraud detection system for identifying potentially fraudulent credit card transactions.

The project focuses on the challenges of highly imbalanced classification, where fraudulent transactions represent only a very small portion of all transactions.

The workflow covers exploratory data analysis, class imbalance analysis, baseline classification, class weighting, model comparison, Precision-Recall analysis, threshold optimization, feature importance, fraud risk scoring, and business interpretation.

The main objective is to build a fraud detection model that can identify suspicious transactions while maintaining a practical balance between fraud detection and false-positive alerts.

## Objectives

- Understand the structure of credit card transaction data
- Analyze the severity of class imbalance
- Explore transaction amount and time patterns
- Identify features associated with fraudulent transactions
- Build a baseline Logistic Regression model
- Handle class imbalance using class weighting
- Compare Logistic Regression, Random Forest, and XGBoost
- Evaluate models using imbalance-aware metrics
- Optimize the classification threshold
- Identify influential predictive features
- Develop transaction risk categories
- Translate model results into practical fraud detection strategies

## Dataset

The dataset contains anonymized credit card transaction information.

The main variables include:

- `Time`
- `V1` – `V28`
- `Amount`
- `Class`

The `V1`–`V28` variables are transformed and anonymized features.

The target variable is:

```text
0 → Normal Transaction
1 → Fraudulent Transaction
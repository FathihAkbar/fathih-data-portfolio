# Retail Sales Forecasting with Machine Learning

## Overview

This project develops a machine learning-based retail sales forecasting system using historical Walmart sales data.

The objective is to predict future weekly sales by combining historical sales patterns, time-based features, lag features, and rolling statistics.

The project follows a time-aware data science workflow, including exploratory analysis, feature engineering, chronological validation, baseline forecasting, machine learning model comparison, time-series cross-validation, feature importance analysis, and forecast error analysis.

## Objectives

- Understand historical retail sales patterns
- Analyze temporal sales behavior
- Create time-based and historical sales features
- Build a baseline forecasting model
- Compare Random Forest and XGBoost regression models
- Evaluate models using chronological train-test splitting
- Validate model performance using time-series cross-validation
- Identify the most influential forecasting features
- Analyze prediction errors
- Generate business-oriented insights from the forecasting results

## Dataset

**Dataset:** Walmart Sales Forecasting

The dataset contains historical weekly sales information for Walmart stores and departments.

Main variables include:

- `Store`
- `Dept`
- `Date`
- `Weekly_Sales`
- `IsHoliday`

The original dataset contains **421,570 records**.

For the final modeling stage, data was organized by **Store + Department + Date** to preserve individual sales patterns across different store and department combinations.

After creating lag and rolling features and removing records without sufficient historical information, the final modeling dataset contained:

**261,083 observations**

## Tools & Technologies

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- Scikit-learn
- XGBoost
- Google Colab

## Methodology

```text
Raw Sales Data
       ↓
Data Understanding
       ↓
Date Processing
       ↓
Store + Department Organization
       ↓
Time-Based Feature Engineering
       ↓
Lag Features
       ↓
Rolling Features
       ↓
Chronological Train/Test Split
       ↓
Naive Forecast Baseline
       ↓
Random Forest Regression
       ↓
XGBoost Regression
       ↓
Time-Series Cross Validation
       ↓
Feature Importance
       ↓
Forecast Error Analysis
       ↓
Final Forecast
       ↓
Business Interpretation
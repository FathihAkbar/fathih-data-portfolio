# Industrial Predictive Maintenance with Machine Learning

## Overview

This project develops a machine learning-based predictive maintenance system to identify machines that are likely to experience failure based on operational and sensor-related data.

The project focuses on using machine learning to transform equipment operating conditions into failure predictions and risk categories that can support maintenance prioritization.

The workflow covers exploratory data analysis, feature engineering, class imbalance handling, machine learning model comparison, feature importance analysis, failure probability estimation, risk scoring, and error analysis.

## Objectives

- Understand machine operating and sensor data
- Analyze machine failure patterns
- Investigate class imbalance
- Explore relationships between operational variables and machine failure
- Engineer additional predictive features
- Compare multiple classification algorithms
- Evaluate models using classification and imbalance-aware metrics
- Identify important predictors of machine failure
- Estimate machine failure probability
- Develop machine risk categories
- Translate model results into practical maintenance recommendations

## Dataset

**Dataset:** AI4I 2020 Predictive Maintenance Dataset

The dataset contains machine operating information and failure-related variables.

The original dataset used in this project contains:

**10,000 records and 14 columns**

Main variables include:

- `UDI`
- `Product ID`
- `Type`
- `Air temperature [K]`
- `Process temperature [K]`
- `Rotational speed [rpm]`
- `Torque [Nm]`
- `Tool wear [min]`
- `Machine failure`

Additional failure-mode indicators are also available in the dataset:

- `TWF`
- `HDF`
- `PWF`
- `OSF`
- `RNF`

For the main predictive modeling experiment, the failure-mode indicators were not used as predictors because they are directly related to machine failure and could introduce information leakage.

## Target Variable

The target variable is:

```text
Machine failure

0 → No Failure
1 → Failure
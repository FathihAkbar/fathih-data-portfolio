# Financial Customer Data Quality & Anomaly Monitoring

## Overview

This project develops a data quality monitoring framework for financial customer data by combining traditional data quality assessment with statistical outlier detection and machine learning-based anomaly detection.

Instead of treating data quality as a one-time preprocessing activity, the project approaches it as a continuous monitoring process that can identify potential issues, prioritize them based on severity, and apply automated remediation to well-defined data quality problems.

The project is designed as a simulation of an enterprise-oriented Data Management and Data Observability workflow.

## Objectives

- Profile financial customer data
- Assess data completeness
- Assess data uniqueness
- Validate values against defined business rules
- Detect statistical outliers
- Detect anomalous records using machine learning
- Prioritize data quality issues
- Build automated data quality monitoring
- Create a data quality score
- Simulate data corruption
- Develop automated remediation procedures
- Produce an executive-level data quality report
- Translate technical findings into data management recommendations

## Dataset

**Dataset:** Bank Marketing Dataset

The dataset contains customer-level information collected from a bank marketing campaign.

The dataset used in this project contains:

- **45,211 records**
- **17 fields**

The main variables include:

- `age`
- `job`
- `marital`
- `education`
- `default`
- `balance`
- `housing`
- `loan`
- `contact`
- `day`
- `month`
- `duration`
- `campaign`
- `pdays`
- `previous`
- `poutcome`
- `y`

The dataset was obtained from the UCI Machine Learning Repository.

## Tools & Technologies

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- Scikit-learn
- Isolation Forest
- Google Colab

## Workflow

```text
Raw Customer Data
        ↓
Data Profiling
        ↓
Completeness Check
        ↓
Uniqueness Check
        ↓
Business Rule Validation
        ↓
Statistical Outlier Detection
        ↓
Machine Learning Anomaly Detection
        ↓
Data Quality Scoring
        ↓
Issue Prioritization
        ↓
Automated Monitoring
        ↓
Synthetic Data Corruption
        ↓
Automated Remediation
        ↓
Executive Data Quality Report
# Customer Lifetime Value Prediction & Value Segmentation

## Overview

This project develops a Customer Lifetime Value (CLV) prediction framework to estimate future customer revenue based on historical purchasing behavior.

The project uses transaction-level retail data to transform customer purchase history into predictive customer value estimates. Instead of evaluating customers only from their historical spending, the framework estimates future customer value and uses the predictions to prioritize high-value customers.

The project combines:

- Customer behavior analysis
- RFM-style feature engineering
- Temporal data splitting
- Two-stage machine learning
- Customer value ranking
- Revenue capture analysis
- Customer value segmentation
- Business strategy recommendations

The main objective is to answer:

> **Which customers are expected to generate the most future value?**

---

## Objectives

- Analyze historical customer purchasing behavior
- Build customer-level behavioral features
- Predict whether customers will purchase again
- Predict future revenue for customers who purchase
- Estimate expected future customer value
- Rank customers according to predicted CLV
- Measure revenue concentration among top-ranked customers
- Segment customers based on predicted value
- Translate model predictions into business actions

---

## Dataset

**Dataset:** Online Retail II

The dataset contains transaction-level retail information collected from a UK-based online retail business.

The full dataset used in this project contains:

- **1,067,371 transaction records**
- **8 original fields**
- Data covering multiple years of transactions
- Approximately **5,942 customers with available Customer ID**

The main variables include:

- `Invoice`
- `StockCode`
- `Description`
- `Quantity`
- `InvoiceDate`
- `Price`
- `Customer ID`
- `Country`

The dataset was obtained from the UCI Machine Learning Repository.

---

# Data Preparation

The original dataset contains transactions with missing customer identifiers, duplicate records, cancellations, and invalid transaction values.

The cleaning process included:

```text
Raw Transactions
        ↓
Customer ID Validation
        ↓
Duplicate Removal
        ↓
Date Validation
        ↓
Quantity Validation
        ↓
Price Validation
        ↓
Cancellation Detection
        ↓
Revenue Calculation
        ↓
Final Customer Transaction Dataset
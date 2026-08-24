# Customer Segmentation with RFM Analysis

## Overview

This project applies **RFM (Recency, Frequency, Monetary) Analysis** to transaction data in order to segment customers based on their purchasing behavior.

The analysis aims to identify high-value customers, loyal customers, potential customer opportunities, customers that need attention, and customers who are at risk of becoming inactive.

## Business Questions

This project addresses the following questions:

- How recently did each customer make a purchase?
- How frequently does each customer purchase?
- How much does each customer spend?
- Which customer segments have the highest value?
- Which customers are at risk of becoming inactive?
- Which customer segment contributes the most revenue?
- What business strategies can be applied to each customer segment?

## Dataset

**Source:** Kaggle – Online Retail Dataset

The dataset contains transaction-level information including:

- `InvoiceNo`
- `StockCode`
- `Description`
- `Quantity`
- `InvoiceDate`
- `UnitPrice`
- `CustomerID`
- `Country`

A `TotalSales` column was created during preprocessing:

```text
TotalSales = Quantity × UnitPrice
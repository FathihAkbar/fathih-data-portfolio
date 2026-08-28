# End-to-End Retail ETL & Analytics Pipeline

## Overview

This project develops an end-to-end retail data pipeline that transforms raw transaction data into a validated analytical warehouse and business analytics layer.

The project simulates a real-world data workflow in which raw transactional data is extracted, cleaned, validated, transformed into a dimensional data warehouse, loaded into SQLite, and analyzed using SQL.

Rather than focusing only on data visualization, this project emphasizes the complete data lifecycle:

```text
Raw Data
    ↓
Extract
    ↓
Transform
    ↓
Data Quality Gate
    ↓
Star Schema
    ↓
SQLite Data Warehouse
    ↓
SQL Analytics
    ↓
Advanced SQL
    ↓
Executive Insights
    ↓
Pipeline Audit

The main objective is to demonstrate how raw transactional data can be transformed into reliable, structured, and analysis-ready information.

Objectives
Extract multi-sheet transactional data
Preserve source data lineage
Clean and standardize raw records
Handle missing customer identifiers
Remove duplicate records
Identify cancelled transactions
Validate transaction values
Calculate revenue
Build a dimensional data warehouse
Implement a star schema
Load analytical tables into SQLite
Validate foreign-key relationships
Reconcile revenue across pipeline stages
Perform business analytics using SQL
Apply advanced SQL techniques
Generate executive-level insights
Export analytical datasets
Perform a final end-to-end pipeline audit
Dataset

Dataset: Online Retail II

The dataset contains transaction-level records from a UK-based online retail business.

The full dataset used in this project contains:

1,067,371 raw transaction records
8 original columns
Data from multiple yearly sheets
Approximately 5,942 unique customer IDs before customer-level filtering

The original variables include:

Invoice
StockCode
Description
Quantity
InvoiceDate
Price
Customer ID
Country

The dataset was obtained from the UCI Machine Learning Repository.

Pipeline Architecture

The project is organized into several processing layers.

                    RAW LAYER
                        │
                        ▼
                Data Extraction
                        │
                        ▼
                 TRANSFORM LAYER
                        │
                        ▼
               Data Quality Gate
                        │
                        ▼
              ANALYTICAL WAREHOUSE
                        │
               ┌────────┴────────┐
               ▼                 ▼
          FACT TABLES       DIMENSIONS
               │                 │
               └────────┬────────┘
                        ▼
                   SQLite DB
                        │
                        ▼
                  SQL ANALYTICS
                        │
                        ▼
               EXECUTIVE INSIGHTS
                        │
                        ▼
                 PIPELINE AUDIT
Step 1 — Data Extraction

The extraction layer reads all available sheets from the Online Retail II workbook.

The two source sheets were:

Year 2009-2010
Year 2010-2011

The extracted records were combined into a single raw dataset.

A Source_Sheet field was added to preserve basic data lineage.

Extraction Results
Metric	Value
Raw Records	1,067,371
Raw Columns	9
Duplicate Rows	12,133
Missing Cells	247,389
Missing Customer ID	243,007

The raw data retained its original structure before transformation.

Step 2 — Transformation & Data Quality Gate

The transformation layer standardized fields and applied business validation rules.

The main transformation steps were:

Raw Data
    ↓
Column Standardization
    ↓
Data Type Conversion
    ↓
Customer ID Filtering
    ↓
Duplicate Removal
    ↓
Cancellation Identification
    ↓
Transaction Validation
    ↓
Revenue Calculation
    ↓
Valid Sales Dataset
Cleaning Results
Metric	Value
Raw Rows	1,067,371
Missing Customer ID	243,007
Rows after Customer ID filter	812,368
Duplicates removed	11,998
Cancellations identified	18,688
Invalid quantity rows	18,688
Invalid price rows	71
Invalid date rows	0
Final sales rows	793,609

The final analytical sales dataset contained:

5,878 customers
36,969 invoices
4,631 products
41 countries
17,685,460.64 total revenue
Data Quality Gate

A quality gate was implemented before the data entered the warehouse.

The final validation checks included:

Check	Result
Missing CustomerID	PASS
Missing InvoiceDate	PASS
Invalid Quantity	PASS
Invalid UnitPrice	PASS
Invalid Revenue	PASS
Duplicate Rows	PASS

Final pipeline quality status:

PIPELINE QUALITY STATUS: PASS

The missing Customer ID records were not artificially imputed because customer-level analysis requires a valid customer identifier.

Step 3 — Star Schema

The transformed sales data was modeled into a star schema.

                 dim_customer
                      │
                      │
dim_date ─────── fact_sales ─────── dim_product
                      │
                      │
                 dim_country

The warehouse consists of:

Fact Table

fact_sales

Contains transaction-level measures and foreign keys.

Main fields:

SalesKey
InvoiceNo
CustomerKey
ProductKey
DateKey
CountryKey
Quantity
UnitPrice
Revenue
Dimension Tables

dim_customer

Contains customer-level reference information.

dim_product

Contains product codes and product descriptions.

dim_date

Contains calendar attributes such as year, quarter, month, week, day, and weekday information.

dim_country

Contains country reference information.

Fact Table Grain

The fact table follows the rule:

1 row = 1 transaction line

A surrogate SalesKey was introduced to uniquely identify each transaction line.

This prevents legitimate repeated combinations of invoice, product, customer, and value fields from being incorrectly treated as duplicate records.

Final Warehouse Size
Table	Rows
fact_sales	793,609
dim_customer	5,878
dim_product	4,631
dim_date	604
dim_country	41
Warehouse Validation

All foreign-key relationships were validated successfully.

CustomerKey → PASS
ProductKey  → PASS
DateKey     → PASS
CountryKey  → PASS

The fact table also passed:

Missing SalesKey      → 0
Duplicate SalesKey    → 0
Missing Revenue       → 0
Invalid Quantity      → 0
Invalid UnitPrice     → 0
Missing Foreign Keys  → 0

Final star schema status:

FINAL STAR SCHEMA STATUS
PASS
Revenue Reconciliation

A revenue reconciliation was performed between the transformed sales layer and the final warehouse.

Source Revenue
= 17,685,460.64

Warehouse Revenue
= 17,685,460.64

Difference
= 0.00

Therefore:

Revenue Reconciliation
PASS

This confirms that the ETL and warehouse transformation preserved the total revenue.

Step 4 — SQLite Data Warehouse

The star schema was loaded into a SQLite database:

retail_analytics.db

The SQLite warehouse contains:

retail_analytics.db
│
├── fact_sales
├── dim_customer
├── dim_product
├── dim_date
└── dim_country

Database validation confirmed that row counts in SQLite matched the source warehouse tables.

The final database size was approximately:

83.96 MB

Step 5 — SQL Business Analytics

The warehouse was analyzed directly using SQL.

The first analytical layer included:

Executive KPI
Monthly revenue
Country performance
Product performance
Customer performance
Customer frequency
Repeat customer analysis
Yearly revenue
Weekday vs weekend performance
Product code analysis
Executive KPI

The final dataset generated the following overall KPIs:

KPI	Value
Total Orders	36,969
Total Customers	5,878
Total Products	4,631
Total Units Sold	1,067,581
Total Revenue	17,685,460.64
Average Order Value	478.39
Revenue per Customer	3,008.75
Monthly Revenue Analysis

Monthly revenue was analyzed using SQL and window-based growth calculations.

The analysis revealed substantial variation in monthly performance.

Several strong periods were observed around:

October 2010
November 2010
September 2011
October 2011
November 2011

The largest negative month-over-month change occurred in December 2011, with approximately:

-55.27%

This indicates substantial temporal variation in retail revenue.

Country Performance

The United Kingdom was by far the dominant market.

Top Market
United Kingdom

Revenue:
14,668,669.08

Revenue Share:
82.93%

Other important markets included:

EIRE
Netherlands
Germany
France
Australia
Spain
Switzerland
Sweden
Denmark

The strong concentration of revenue in the UK indicates a highly concentrated geographic revenue structure.

Product Performance

The top products by revenue were identified using SQL aggregation.

The highest-revenue product in the analysis was:

REGENCY CAKESTAND 3 TIER

with approximately:

285,992.35 revenue

The top-product analysis helps identify products that contribute disproportionately to total sales.

Customer Frequency Analysis

Customers were grouped according to purchase frequency.

The final segmentation was:

Customer Group	Customers
Repeat	2,094
One-Time	1,623
Frequent	1,285
Loyal	876

The result shows a substantial repeat-customer population.

Advanced SQL Analytics

The second analytical layer uses more advanced SQL functionality.

The project implemented:

Common Table Expressions (CTEs)
Window Functions
ROW_NUMBER()
RANK()
NTILE()
LAG()
SUM() OVER()
Cumulative revenue calculations
Customer contribution analysis
Pareto analysis
Customer quartile analysis
Product ranking by country

This extends the project beyond basic SQL aggregation.

Customer Revenue Concentration

The analysis ranked customers according to their total revenue contribution.

The result showed strong concentration among high-value customers.

Pareto Milestone

Approximately:

22.93% of customers generated 80% of total revenue.

This means that customer revenue is highly concentrated among a relatively small segment of the customer base.

The Pareto curve was used to visualize this concentration.

Customer Revenue Contribution

The highest-value customer generated approximately:

608,821.65

which represented:

3.44% of total revenue

The cumulative contribution increases rapidly among the highest-ranked customers.

This confirms that customer-level revenue distribution is highly unequal.

Customer Value Quartiles

Customers were also grouped into revenue quartiles.

Q1 — Highest Value
Q2 — High Value
Q3 — Medium Value
Q4 — Lowest Value

This provides another way to identify high-contribution customer groups.

Monthly Customer Activity

Monthly active customers, orders, revenue, and revenue per active customer were calculated using SQL.

This allows the business to analyze whether revenue changes are driven by:

Changes in customer activity
Changes in order volume
Changes in customer spending

The analysis can therefore distinguish between changes in customer population and changes in transaction value.

Top Products by Country

The project uses SQL window functions to identify the top three products in each country.

The ranking was generated using:

RANK() OVER (
    PARTITION BY CountryKey
    ORDER BY Revenue DESC
)

This allows product performance to be analyzed within individual markets instead of only at the global level.

Executive Analytics Dashboard

The final dashboard includes:

Monthly revenue trend
Customer revenue Pareto curve
Top countries by revenue
Top products by revenue
Customer frequency distribution

These visualizations convert the analytical SQL output into business-readable information.

Key Findings
1. The ETL pipeline successfully processed the full dataset

The pipeline processed:

1,067,371 raw records

and produced:

793,609 valid sales transaction records.

2. The data quality gate passed

All critical validation checks returned PASS.

3. The analytical warehouse preserved revenue

Source and warehouse revenue were identical:

17,685,460.64

with a difference of:

0.00

4. Revenue is geographically concentrated

The United Kingdom generated:

82.93% of total revenue.

5. Revenue is highly concentrated among customers

Approximately:

22.93% of customers generated 80% of revenue.

6. Repeat purchasing is significant

The dataset contained:

4,255 customers with more than one order

when repeat customers are defined as customers with at least two purchases.

7. Revenue shows substantial temporal variation

Monthly performance fluctuates considerably across the observation period, suggesting that temporal monitoring is important for retail analytics.

8. SQL enables reusable analytical workflows

The dimensional model makes it possible to reuse the same warehouse for multiple business questions without repeating the entire transformation process.

Business Recommendations
Prioritize High-Contribution Customers

Because approximately 22.93% of customers contribute around 80% of revenue, customer retention and service resources should consider customer revenue contribution.

Monitor Geographic Concentration

The United Kingdom contributes approximately 82.93% of revenue.

The business should maintain strong performance in this market while identifying opportunities to diversify revenue across other geographic markets.

Monitor Monthly Revenue Trends

Monthly revenue should be monitored continuously to identify seasonal behavior, sudden declines, and growth opportunities.

Develop Customer Retention Programs

The presence of a large repeat-customer base indicates opportunities to strengthen loyalty and increase purchase frequency.

Use the Data Warehouse as a Reusable Analytical Layer

The star schema should serve as a common analytical foundation for future reporting, dashboards, and machine learning projects.

Automate the ETL Process

A production version could automate:

Extract
→ Validate
→ Transform
→ Load
→ Test
→ Refresh Analytics

This would reduce manual intervention and improve repeatability.

Integrate Data Quality Monitoring

The pipeline can be extended with automated data quality and drift monitoring so that structural or distributional problems are detected before they affect downstream analytics.

Technical Architecture
                 Online Retail II
                        │
                        ▼
                Python Extraction
                        │
                        ▼
                Transformation
                        │
                        ▼
              Data Quality Gate
                        │
                        ▼
                   Star Schema
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
    fact_sales    dim_customer   dim_product
          │
          ├────────── dim_date
          │
          └────────── dim_country
                        │
                        ▼
                   SQLite
                        │
                        ▼
                  SQL Queries
                        │
                        ▼
              Executive Analytics
Technology Stack
Programming
Python
Pandas
NumPy
Database
SQLite
SQL
Analytics
SQL Aggregation
CTE
Window Functions
Ranking
Pareto Analysis
KPI Analysis
Customer Analytics
Visualization
Matplotlib
Seaborn
Development Environment
Google Colab
Jupyter Notebook
Git
GitHub
Project Structure
19-end-to-end-retail-etl-analytics/
│
├── End_to_End_Retail_ETL_Analytics.ipynb
├── retail_analytics.db
├── README.md
│
└── project19_exports/
    │
    ├── executive_kpi.csv
    ├── monthly_revenue.csv
    ├── country_performance.csv
    ├── top_products.csv
    ├── customer_frequency.csv
    ├── customer_contribution.csv
    ├── customer_concentration.csv
    ├── repeat_behavior.csv
    ├── customer_quartile.csv
    ├── monthly_customer_activity.csv
    ├── country_contribution.csv
    ├── pipeline_metadata.json
    │
    └── warehouse/
        ├── fact_sales.csv
        ├── dim_customer.csv
        ├── dim_product.csv
        ├── dim_date.csv
        └── dim_country.csv
Final Pipeline Audit

The final audit validated the complete ETL process.

Row Reconciliation
Raw Layer
1,067,371 rows

↓

Transformed Sales Layer
793,609 rows

↓

Fact Sales Layer
793,609 rows
Final Audit Results
Check	Status
Fact rows match sales rows	PASS
Unique SalesKey	PASS
No missing CustomerKey	PASS
No missing ProductKey	PASS
No missing DateKey	PASS
No missing CountryKey	PASS
No invalid quantity	PASS
No invalid unit price	PASS
No missing revenue	PASS
Revenue reconciled	PASS
Final Status
OVERALL PIPELINE STATUS
PASS

The final SQLite database was successfully created and validated.

Exported Analytical Outputs

The pipeline automatically exports analytical datasets including:

executive_kpi.csv
monthly_revenue.csv
country_performance.csv
top_products.csv
customer_frequency.csv
customer_contribution.csv
customer_concentration.csv
repeat_behavior.csv
customer_quartile.csv
monthly_customer_activity.csv
country_contribution.csv
pipeline_metadata.json

These outputs can be used independently for reporting, dashboard development, or further analytics.

Limitations
Historical Dataset

The dataset represents historical retail transactions and does not represent a live production environment.

Missing Customer IDs

Transactions without Customer IDs cannot be reliably attributed to individual customers and were therefore excluded from customer-level analytics.

Cancellation Handling

Cancelled transactions were excluded from the final sales fact table for revenue analysis.

Revenue-Based Analysis

The analysis uses transaction revenue and does not account for costs, margins, acquisition costs, or profitability.

Geographic Concentration

The dominance of the United Kingdom reflects this specific dataset and should not be interpreted as a general representation of global retail behavior.

Operational Deployment

The current implementation runs as a notebook-based pipeline. A production implementation would require scheduling, orchestration, monitoring, logging, and infrastructure integration.

Future Improvements

Future versions of the pipeline could include:

PostgreSQL or cloud data warehouse integration
Apache Airflow orchestration
dbt transformation workflows
Automated data quality checks
Data contracts
Data lineage
Incremental ETL processing
Slowly Changing Dimensions
Automated anomaly detection
Data drift monitoring
Power BI dashboard integration
Real-time ingestion
Production monitoring
CI/CD pipeline testing
Automated pipeline alerts
Customer churn integration
CLV integration
Predictive analytics integration
Conclusion

This project developed an end-to-end retail ETL and analytics pipeline that transforms raw transaction records into a validated analytical warehouse and SQL-based business intelligence layer.

The pipeline successfully processed 1,067,371 raw records and produced 793,609 valid sales transaction records.

The final warehouse contained:

793,609 fact records
5,878 customers
4,631 products
604 dates
41 countries

The complete pipeline passed all critical validation checks, including foreign-key validation, transaction-level grain validation, and revenue reconciliation.

The source and warehouse revenue both totaled:

17,685,460.64

with a reconciliation difference of:

0.00

Business analytics revealed several important findings. The United Kingdom contributed approximately 82.93% of total revenue, while approximately 22.93% of customers generated 80% of total revenue.

These findings demonstrate how data transformation and dimensional modeling can provide a reliable foundation for reusable business analytics.

Overall, the project demonstrates an end-to-end workflow combining:

Data Engineering
+
Data Quality
+
Data Warehousing
+
SQL Analytics
+
Business Intelligence

The resulting architecture provides a foundation for more advanced enterprise analytics workflows involving automated ETL, data observability, dashboards, predictive modeling, and customer intelligence.
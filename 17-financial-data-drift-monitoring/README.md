# Financial Data Drift & Pipeline Monitoring

## Overview

This project develops a financial data drift and pipeline monitoring framework designed to detect changes in data distributions across successive data batches.

Unlike traditional data quality checks that focus mainly on missing values, duplicates, and invalid records, this project focuses on identifying **distributional changes over time** that may affect downstream analytics, reporting, and machine learning systems.

The project combines data integrity validation, statistical drift detection, machine learning-oriented monitoring, automated alerting, and multi-batch trend analysis.

The workflow is designed as a simulation of an enterprise-oriented **Data Observability** system.

## Objectives

- Monitor schema consistency between reference and current data
- Monitor data integrity
- Detect numerical distribution drift
- Detect categorical distribution drift
- Measure practical drift magnitude
- Test statistical significance of distribution changes
- Combine multiple drift metrics
- Generate automated drift alerts
- Monitor drift across multiple data batches
- Identify early drift indicators
- Provide executive-level monitoring insights
- Support proactive data management decisions

## Dataset

**Dataset:** Bank Marketing Dataset

The dataset contains customer-level information collected from a bank marketing campaign.

The source dataset contains:

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

## Monitoring Dataset

For drift monitoring, two datasets were constructed from the source data:

```text
Reference Data
→ Baseline distribution

Current Data
→ Simulated incoming data

Each dataset contained:

20,000 observations

A controlled amount of distributional drift was introduced into the current dataset to simulate changes that could occur in an operational data pipeline.

The simulation modified selected numerical and categorical features while preserving the dataset schema.

Drift Simulation

The following changes were intentionally introduced into the current dataset:

Numerical Features
balance
duration
campaign
Categorical Features
housing
loan

The purpose of this simulation was to test whether the monitoring framework could detect distributional changes.

The simulated changes do not represent real production drift.

Tools & Technologies
Python
Pandas
NumPy
SciPy
Matplotlib
Seaborn
Scikit-learn
Isolation Forest
Google Colab
Workflow
Reference Data
        ↓
Current Data
        ↓
Schema Monitoring
        ↓
Data Integrity Check
        ↓
Numerical Drift
   ├── PSI
   └── KS Test
        ↓
Categorical Drift
   ├── TVD
   └── Chi-Square
        ↓
Unified Drift Assessment
        ↓
Automated Alert System
        ↓
Distribution Visualization
        ↓
Multi-Batch Monitoring
        ↓
Drift Trend Analysis
        ↓
Executive Monitoring Dashboard
        ↓
Investigation / Action
Schema & Data Integrity Monitoring

The monitoring layer compares reference and current datasets across:

Column existence
Column order
Data types
Missing values
Duplicate records

The final monitoring workflow was designed to distinguish schema/data integrity issues from distributional drift.

This distinction is important because a dataset may remain structurally valid while its underlying distributions change.

Example:

Schema Integrity     → PASS
Data Type Integrity  → PASS
Missing Values       → PASS
Duplicates           → PASS

Distribution Drift   → DETECTED
Population Stability Index (PSI)

PSI was used to measure distribution changes for numerical features.

The operational thresholds used in this project were:

PSI	Interpretation
< 0.10	Low Drift
0.10 – < 0.25	Moderate Drift
>= 0.25	High Drift

These thresholds are project-level operational thresholds and are not universal standards.

PSI Results

The numerical drift analysis produced:

Feature	PSI	Drift Level
campaign	0.154722	Moderate
balance	0.005477	Low
duration	0.003723	Low
age	0.000197	Low
previous	0.000049	Low
pdays	0.000003	Low

The most prominent numerical drift was observed in:

campaign

with a PSI of approximately:

0.1547

This indicates moderate practical distribution drift under the defined thresholds.

Kolmogorov–Smirnov Test

The Kolmogorov–Smirnov two-sample test was used to evaluate whether the reference and current numerical distributions differed statistically.

The significance level used was:

α = 0.05

Interpretation:

p-value < 0.05
→ Statistically significant distribution difference

p-value >= 0.05
→ No statistically significant difference detected
KS Test Results
Feature	KS Statistic	Result
campaign	0.19290	Drift Detected
balance	0.02945	Drift Detected
duration	0.02869	Drift Detected
age	0.00445	No Significant Drift
previous	0.00215	No Significant Drift
pdays	0.00166	No Significant Drift

Three numerical features showed statistically significant distribution differences:

campaign
balance
duration

The campaign feature showed the strongest KS statistic.

Categorical Drift Monitoring

Categorical features cannot be evaluated appropriately using the KS test, so a separate monitoring approach was implemented.

Two metrics were used:

Total Variation Distance (TVD)
Chi-Square test
Total Variation Distance

The operational TVD thresholds used in this project were:

TVD	Interpretation
< 0.05	Low Drift
0.05 – < 0.10	Moderate Drift
>= 0.10	High Drift

These thresholds are defined for the purpose of this project.

Categorical Drift Results
Feature	TVD	Drift Level	Statistical Result
loan	0.123950	High	Significant
housing	0.107050	High	Significant
job	0.007750	Low	Not Significant
education	0.007550	Low	Not Significant
month	0.005350	Low	Not Significant
marital	0.004750	Low	Not Significant
poutcome	0.003600	Low	Not Significant
contact	0.002100	Low	Not Significant

The strongest categorical drift occurred in:

loan
housing

Both exceeded the high-drift TVD threshold.

Categorical Distribution Changes
Housing

The simulated distribution changed from approximately:

Reference
yes → 55.42%
no  → 44.58%

to:

Current
yes → 44.72%
no  → 55.28%
Loan

The simulated distribution changed from approximately:

Reference
no  → 83.94%
yes → 16.08%

to:

Current
no  → 71.55%
yes → 28.45%

These changes demonstrate that the categorical drift detector is able to identify meaningful shifts in customer distributions.

Unified Drift Monitoring

The project combines multiple metrics to create a unified feature-level assessment.

Numerical Features

Numerical drift is evaluated using:

PSI
+
KS Test
Categorical Features

Categorical drift is evaluated using:

TVD
+
Chi-Square

The system combines statistical significance with practical drift magnitude rather than relying on a single metric.

Unified Drift Results
Feature	Type	Level	Unified Status
housing	Categorical	High	HIGH ALERT
loan	Categorical	High	HIGH ALERT
campaign	Numeric	Moderate	MODERATE ALERT
balance	Numeric	Low	INVESTIGATE
duration	Numeric	Low	INVESTIGATE
age	Numeric	Low	PASS
previous	Numeric	Low	PASS
pdays	Numeric	Low	PASS
job	Categorical	Low	PASS
education	Categorical	Low	PASS
month	Categorical	Low	PASS
marital	Categorical	Low	PASS
poutcome	Categorical	Low	PASS
contact	Categorical	Low	PASS
Current Drift Status

The unified monitoring system identified:

PASS             → 9 features
INVESTIGATE      → 2 features
MODERATE ALERT   → 1 feature
HIGH ALERT       → 2 features

The resulting overall status was:

HIGH ALERT

The active high-priority features were:

housing
loan

The moderate alert was:

campaign

The features requiring investigation were:

balance
duration
Automated Alerting

An alert engine was implemented to classify detected drift into four levels:

PASS
INVESTIGATE
MODERATE ALERT
HIGH ALERT

Each non-PASS feature receives a recommended action.

Example:

campaign
→ MODERATE ALERT
→ Review feature distribution and monitor next batch

housing
→ HIGH ALERT
→ Immediate investigation

loan
→ HIGH ALERT
→ Immediate investigation

The purpose is to convert statistical monitoring into an actionable operational workflow.

Multi-Batch Monitoring

To simulate a real data observability environment, five sequential data batches were created.

Batch 1
↓
Batch 2
↓
Batch 3
↓
Batch 4
↓
Batch 5

Distributional drift was progressively increased in later batches.

Multi-Batch Results
Batch	Avg Numeric PSI	Max Numeric PSI	Avg Categorical TVD	Max Categorical TVD	Combined Score	Status
1	0.0000	0.0000	0.0000	0.0000	0.0000	PASS
2	0.0014	0.0030	0.0087	0.0167	0.0465	PASS
3	0.0014	0.0036	0.0234	0.0890	0.1197	PASS
4	0.0136	0.0753	0.0395	0.1631	0.2247	PASS
5	0.0310	0.1752	0.0588	0.2636	0.3561	INVESTIGATE

The combined drift score increased continuously across the simulated batches.

Batch 1 → 0.0000
Batch 2 → 0.0465
Batch 3 → 0.1197
Batch 4 → 0.2247
Batch 5 → 0.3561

This demonstrates how gradual distribution changes can be monitored over time.

Feature Drift Trend

The trend analysis showed that:

campaign

was the clearest numerical drift indicator.

For categorical variables, the strongest increasing drift patterns were observed in:

loan
housing

The purpose of this analysis is to demonstrate how an observability system can identify not only the existence of drift but also its progression across data batches.

Executive Monitoring Dashboard

The final dashboard provides a high-level view of the pipeline condition.

The dashboard includes:

Number of monitored features
Number of passing features
High alerts
Moderate alerts
Investigation items
Latest batch drift score
Latest batch status
Top numerical drift features
Top categorical drift features
Historical drift trend

The latest batch in the simulation reached:

Batch              : 5
Combined Drift     : 0.3561
Status             : INVESTIGATE

This indicates that the latest batch should be reviewed before being used for critical downstream processes.

Key Findings
1. Structural integrity remained stable

The reference and current datasets maintained the same schema, data types, and structural integrity.

No missing values or duplicate records were introduced into the monitoring datasets.

2. Numerical drift was concentrated in campaign behavior

campaign showed the strongest numerical distribution change, with:

PSI = 0.1547
KS Statistic = 0.1929

This resulted in a moderate drift alert.

3. Categorical drift was strongest in loan and housing status

Both loan and housing exceeded the high-drift TVD threshold and were statistically significant under the Chi-Square test.

4. Statistical significance and practical magnitude provide complementary information

Some features may be statistically significant without exhibiting a large practical distribution shift.

For this reason, the project combines statistical tests with distribution magnitude metrics.

5. Drift can develop gradually

The multi-batch simulation showed a consistent increase in the combined drift score.

This demonstrates the importance of historical monitoring instead of relying only on one-time reference/current comparisons.

6. The monitoring framework can produce actionable alerts

The system converts detected drift into operational statuses:

PASS
INVESTIGATE
MODERATE ALERT
HIGH ALERT

This makes the analysis more suitable for data management and observability workflows.

Business Recommendations
Implement Continuous Data Drift Monitoring

Incoming data batches should be compared against a stable reference dataset on a recurring basis.

Prioritize High-Impact Drift

Features with the strongest practical and statistical drift should be investigated first.

In this simulation, priority features include:

loan
housing
campaign
Combine Statistical and Practical Measurements

A monitoring system should not rely solely on p-values.

Metrics such as PSI and TVD help determine whether a statistically significant change is also practically meaningful.

Monitor Drift Across Time

A historical drift log should be maintained so that gradual distribution changes can be detected before they become critical.

Investigate Before Model Retraining

If significant drift affects variables used by downstream machine learning systems, data quality and business causes should be investigated before automatically retraining models.

Maintain a Stable Reference Dataset

A well-defined reference dataset should serve as the baseline for monitoring.

The reference period should periodically be reviewed to ensure that it remains representative of the intended operating environment.

Data Management Interpretation

From a Data Management perspective, the project demonstrates four important capabilities:

Data Quality
      ↓
Data Integrity
      ↓
Data Observability
      ↓
Proactive Monitoring

The monitoring framework can potentially be extended into an enterprise pipeline where data quality and drift checks are automatically executed whenever new data enters the system.

Limitations
Synthetic Drift

The reference/current comparison and multi-batch drift patterns were intentionally simulated.

They do not represent real production changes.

Public Dataset

The dataset is publicly available and does not represent internal enterprise data.

Operational Thresholds

PSI, TVD, and combined-score thresholds were defined for this project and should be calibrated against actual organizational requirements in production.

Statistical Significance

With sufficiently large datasets, small differences may become statistically significant.

Therefore, p-values should be interpreted together with practical drift metrics.

Drift Does Not Mean Bad Data

Distribution drift does not automatically mean that the new data is incorrect.

A drift may reflect:

Customer behavior changes
Business process changes
Data collection changes
Source-system updates
Seasonal patterns
Genuine population changes
Future Improvements

Future versions of this project could include:

Production data ingestion
Data contracts
Schema versioning
Great Expectations
Evidently AI
PSI monitoring dashboards
Population Stability monitoring by time period
Concept drift detection
Prediction drift monitoring
Feature drift alert notifications
SQL-based data observability
Data lineage integration
Automated incident management
Cloud monitoring
Real-time data pipelines
Model performance monitoring
Conclusion

This project developed a financial data drift and pipeline monitoring framework for detecting distributional changes in customer data.

The framework combined schema validation, data integrity checks, PSI, KS testing, TVD, Chi-Square testing, unified drift classification, automated alerting, and multi-batch trend monitoring.

The analysis demonstrated that data can remain structurally valid while its distributions change over time.

In the simulated current dataset:

campaign
→ Moderate numeric drift

loan
→ High categorical drift

housing
→ High categorical drift

The unified monitoring system classified:

9 features   → PASS
2 features   → INVESTIGATE
1 feature    → MODERATE ALERT
2 features   → HIGH ALERT

The multi-batch simulation further demonstrated gradual drift progression, with the combined drift score increasing from:

0.0000 in Batch 1

to:

0.3561 in Batch 5

and the latest batch reaching the INVESTIGATE status.

Overall, the project demonstrates an end-to-end data observability workflow that can identify distribution changes, distinguish statistical significance from practical magnitude, generate actionable alerts, and support proactive data management decisions.

The framework provides a foundation for developing more advanced enterprise data monitoring systems that continuously assess data health before downstream analytics, reporting, and machine learning processes are affected.
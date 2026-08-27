# Marketing Campaign Uplift Modeling

## Overview

This project develops a customer uplift modeling framework to identify customers who are most likely to change their behavior as a result of a marketing campaign.

Unlike conventional response prediction, which estimates whether a customer will convert, uplift modeling focuses on estimating the **incremental effect of treatment** for individual customers.

The project uses the Criteo Uplift dataset and compares S-Learner and T-Learner approaches to identify customers who are most likely to benefit from a marketing treatment.

The final objective is to transform customer-level treatment effect estimates into a practical campaign targeting strategy.

## Objectives

- Understand treatment and customer response data
- Measure the overall effectiveness of a marketing campaign
- Calculate Average Treatment Effect (ATE)
- Build uplift prediction models
- Compare S-Learner and T-Learner approaches
- Evaluate uplift ranking performance
- Segment customers based on predicted uplift
- Identify customers with high incremental response potential
- Optimize campaign targeting
- Estimate incremental conversions
- Simulate campaign economics and break-even conditions
- Translate model outputs into marketing recommendations

## Dataset

**Dataset:** Criteo Uplift Prediction Dataset

The Criteo Uplift dataset contains customer-level features, treatment assignment, and behavioral outcomes.

The dataset includes:

- `f0` – `f11`: anonymized customer features
- `treatment`: campaign treatment indicator
- `conversion`: conversion outcome
- `visit`: visit outcome
- `exposure`: exposure indicator

Because the dataset contains millions of observations, a representative subset of approximately 500,000 records was created for this project.

After duplicate removal, the final modeling dataset contained:

**498,002 observations**

## Treatment Variable

The `treatment` variable represents whether a customer received the marketing treatment.

```text
0 → Control
1 → Treatment

The final sample contained:

Treatment	Customers	Percentage
Control	74,940	15.05%
Treatment	423,062	84.95%
Conversion Outcome

The target variable is:

conversion

0 → No Conversion
1 → Conversion

The final sample contained:

Conversion	Customers
No Conversion	496,546
Conversion	1,456

The dataset therefore contains a highly imbalanced conversion outcome.

Tools & Technologies
Python
Pandas
NumPy
Scikit-learn
Scikit-uplift
Random Forest
Matplotlib
Seaborn
Google Colab
Workflow
Criteo Uplift Dataset
        ↓
Representative Sampling
        ↓
Data Quality Check
        ↓
Treatment & Conversion Analysis
        ↓
Average Treatment Effect
        ↓
Train / Test Split
        ↓
S-Learner
        ↓
T-Learner
        ↓
Qini AUC
        ↓
AUUC
        ↓
Uplift@K
        ↓
Uplift Ranking
        ↓
Customer Segmentation
        ↓
Campaign Targeting
        ↓
Incremental Conversion
        ↓
ROI Simulation
        ↓
Business Strategy
Data Preparation
Representative Sampling

The original Criteo dataset contains millions of records.

Instead of loading the entire dataset into memory, a representative sample of approximately 500,000 observations was created using proportional sampling across treatment and conversion strata.

This produced:

498,002 observations after duplicate removal

The treatment distribution remained close to the original population:

Control   ≈ 15%
Treatment ≈ 85%
Feature Selection

The modeling stage used the anonymized customer features:

f0
f1
f2
f3
f4
f5
f6
f7
f8
f9
f10
f11

The following variables were not used as predictive features:

treatment
conversion
visit
exposure

Treatment was instead used as the treatment assignment variable, while conversion was used as the outcome.

Campaign Effectiveness

Before building an uplift model, the average campaign effect was measured by comparing treatment and control conversion rates.

Treatment Performance
Group	Customers	Conversions	Conversion Rate
Control	74,940	145	0.1935%
Treatment	423,062	1,311	0.3099%

The treatment group achieved a higher conversion rate than the control group.

Average Treatment Effect

The Average Treatment Effect was:

ATE = 0.001164

Equivalent to:

Absolute Lift = 0.1164 percentage points

and:

Relative Lift = 60.16%

This indicates a positive average treatment effect on conversion within the analyzed sample.

However, average campaign effectiveness does not imply that every customer should receive the treatment.

This motivates the use of uplift modeling.

Uplift Modeling

Uplift modeling estimates how customer outcomes are expected to change because of treatment.

The central concept is:

Predicted Outcome if Treated
            -
Predicted Outcome if Control
            =
Individual Uplift

A positive uplift indicates that a customer is predicted to benefit from treatment.

A near-zero uplift indicates limited expected incremental impact.

A negative uplift indicates that treatment may not be beneficial for that customer.

S-Learner

The S-Learner uses a single machine learning model with treatment assignment incorporated into the learning process.

A Random Forest classifier was used as the base learner.

The model generated individual customer uplift scores.

S-Learner Results
Statistic	Value
Minimum Uplift	-0.003838
Maximum Uplift	0.021179
Mean Uplift	0.000708
Median Uplift	0.000020
Positive Uplift Customers	84,676
Negative Uplift Customers	14,925
T-Learner

The T-Learner uses two separate models:

Treatment Model
→ Predict outcome under treatment

Control Model
→ Predict outcome under control

Individual uplift is then calculated as the difference between the two predicted outcomes.

T-Learner Results
Statistic	Value
Minimum Uplift	-0.100392
Maximum Uplift	0.373543
Mean Uplift	0.000915
Median Uplift	0.000103
Positive Uplift Customers	85,530
Negative Uplift Customers	14,071

The T-Learner generated a wider range of individual uplift estimates, but a larger mean uplift alone does not indicate superior model performance.

Uplift Model Evaluation

The models were evaluated using uplift-specific metrics:

Qini AUC
AUUC
Uplift@10%
Uplift@20%
Uplift@30%
Uplift@40%
Uplift@50%
Model Comparison
Model	Qini AUC	AUUC
S-Learner	0.150472	0.004840
T-Learner	0.140386	0.004524

S-Learner achieved the strongest overall uplift ranking performance.

Therefore:

Final Uplift Model: S-Learner

Uplift at Different Targeting Levels

The estimated uplift was evaluated at several campaign targeting levels.

Targeting	S-Learner	T-Learner
10%	0.007219	0.007564
20%	0.004157	0.004390
30%	0.003145	0.003134
40%	0.002428	0.002388
50%	0.001993	0.001945

The results show that uplift per targeted customer generally decreases as the targeting population expands.

This indicates diminishing incremental value when campaign targeting is extended toward customers with lower predicted uplift.

Customer Uplift Segmentation

Customers were segmented according to their predicted uplift score.

Operational thresholds were used to create four segments:

High Uplift
Positive Uplift
Neutral
Negative Uplift
Segment Results
Segment	Customers	Percentage	Average Uplift
High Uplift	254	0.26%	0.008470
Positive Uplift	1,084	1.09%	0.002208
Neutral	98,113	98.51%	0.000035
Negative Uplift	150	0.15%	-0.001594

The majority of customers were classified as Neutral.

Only a small proportion of customers were estimated to have substantially positive incremental response.

Campaign Targeting Efficiency

Customers were ranked from highest to lowest based on predicted uplift.

Different targeting levels were then evaluated.

Targeting	Customers	Average Uplift	Predicted Incremental Conversions	Uplift Captured
1%	980	0.004159	4.14	46.03%
2%	1,992	0.002534	5.05	56.12%
5%	4,980	0.001234	6.15	68.34%
10%	9,960	0.000897	6.94	77.14%
20%	19,920	0.000385	7.66	85.18%
30%	29,880	0.000267	7.99	88.78%
50%	49,800	0.000169	8.44	93.81%
100%	99,601	0.000078	8.99	100.00%
Final Targeting Strategy

The final campaign strategy was defined as the smallest evaluated targeting group capable of capturing at least 75% of the total predicted uplift.

The result was:

Recommended Targeting = Top 10%

Key figures:

Customers Targeted
9,960

Average Predicted Uplift
0.000897

Predicted Incremental Conversions
6.9388

Predicted Uplift Captured
77.13%

Campaign Cost
$4,980

This strategy targets only 10% of the evaluated population while capturing approximately 77.13% of the total predicted uplift.

Business Simulation

A simple economic simulation was created to demonstrate how uplift predictions can be incorporated into campaign decisions.

Example assumptions:

Campaign Cost per Customer = $0.50
Value per Incremental Conversion = $20

Under these assumptions, the simulated campaigns produced negative ROI.

This should not be interpreted as an actual financial result because the cost and conversion value were hypothetical assumptions used to demonstrate the decision framework.

Instead, the result highlights an important principle:

A strong uplift model does not automatically imply that a campaign is economically profitable.

Campaign cost, customer value, and incremental conversion value must be considered together.

Break-Even Analysis

Under the assumed campaign cost of $0.50 per targeted customer, the estimated break-even value per incremental conversion increased as the targeting population expanded.

Examples:

Targeting	Break-Even Value / Incremental Conversion
1%	~$120
10%	~$718
20%	~$1,299
50%	~$2,950
100%	~$5,536

This indicates that broader campaign targeting requires substantially more value per incremental conversion to offset campaign costs.

Key Findings
1. The campaign has a positive average effect

The treatment group converted at 0.3099%, compared with 0.1935% in the control group.

The resulting relative lift was approximately 60.16%.

2. Average effect varies across customers

The positive overall campaign effect does not imply that every customer should be treated equally.

Uplift modeling revealed substantial heterogeneity in predicted treatment effects.

3. S-Learner achieved the strongest overall uplift ranking

S-Learner achieved:

Qini AUC = 0.150472
AUUC     = 0.004840

and was selected as the final uplift model.

4. Strongly persuadable customers are concentrated in a small segment

Only 0.26% of evaluated customers were classified as High Uplift and 1.09% as Positive Uplift.

This indicates that the strongest predicted incremental effects were concentrated in a relatively small customer population.

5. Top 10% targeting provides a strong efficiency trade-off

Targeting the top 10% of customers captured approximately 77.13% of the total predicted uplift.

This suggests that campaigns can potentially be focused on a smaller population rather than distributed uniformly across all customers.

6. Uplift efficiency decreases with broader targeting

Average predicted uplift decreased from 0.004159 for the top 1% to 0.000078 when targeting the entire test population.

This demonstrates a diminishing-return pattern in campaign expansion.

7. Economic feasibility depends on business assumptions

The ROI simulation showed that campaign economics depend heavily on:

Campaign cost
Customer value
Incremental conversion value
Targeting size

The uplift model should therefore be combined with financial constraints when designing campaign strategies.

Business Recommendations
Prioritize High-Uplift Customers

Customers with the highest predicted uplift should be prioritized because they are estimated to have the strongest incremental response to treatment.

Start with a Selective Campaign

The analysis suggests using the top 10% of customers as an initial targeting strategy.

This group captures approximately 77.13% of total predicted uplift while reaching only 10% of the evaluated population.

Avoid Treating Every Customer Equally

Customers with near-zero predicted uplift may generate limited incremental value from treatment.

Broad targeting may therefore increase campaign cost without generating proportional incremental conversions.

Monitor Negative-Uplift Customers

Customers with negative predicted uplift should be evaluated carefully before receiving the same campaign treatment.

Alternative messaging, timing, or campaign strategies may be more appropriate.

Combine Uplift with Customer Value

Final campaign targeting should consider both incremental response and economic value.

For example:

Predicted Uplift
       +
Customer Value
       +
Campaign Cost
       ↓
Targeting Decision
Validate Through Controlled Experiments

The predicted uplift strategy should be validated using future randomized campaigns.

Actual treatment effects can then be compared with model predictions and used to improve future iterations.

Limitations
Large Original Dataset

The original Criteo dataset is very large, so a representative subset was used for this project.

Anonymized Features

The customer features are anonymized and therefore cannot be assigned direct business meanings.

Low Conversion Rate

Conversion events are relatively rare compared with non-conversions.

Model-Based Treatment Effect

Individual uplift estimates are predictions and should not be interpreted as directly observed individual causal effects.

Hypothetical Economic Assumptions

Campaign cost and conversion value in the ROI simulation were assumed for demonstration purposes and do not represent actual business economics.

Future Improvements

Future versions could explore:

X-Learner
Doubly Robust Learners
Causal Forest
Meta-learners with gradient boosting
Propensity score adjustment
Causal inference diagnostics
Treatment policy optimization
Customer lifetime value integration
Cost-sensitive campaign optimization
Real-world A/B testing
Online uplift model monitoring
Incremental revenue optimization
Conclusion

This project developed a customer uplift modeling framework using the Criteo Uplift dataset to identify customers who are most likely to respond incrementally to a marketing campaign.

The analysis first established that the treatment had a positive average effect, with conversion increasing from 0.1935% in the control group to 0.3099% in the treatment group. This produced an Average Treatment Effect of 0.001164 and a relative lift of approximately 60.16%.

Two uplift modeling approaches were evaluated:

S-Learner
T-Learner

S-Learner achieved the strongest overall ranking performance with:

Qini AUC = 0.150472
AUUC     = 0.004840

The model was then used to rank customers based on predicted incremental response.

The targeting analysis found that targeting the top 10% of customers by predicted uplift could capture approximately 77.13% of total predicted uplift while limiting campaign exposure to only 10% of the evaluated population.

This demonstrates the potential of uplift modeling to move campaign optimization beyond conventional response prediction toward incremental impact estimation and targeted decision-making.

The project also highlights that predictive performance alone is not enough. Campaign cost, customer value, and incremental conversion economics must be considered when translating model predictions into real-world marketing decisions.

Overall, this project demonstrates an end-to-end uplift modeling workflow:

Measure Campaign Effect
        ↓
Estimate Individual Treatment Effect
        ↓
Rank Customers
        ↓
Identify High-Uplift Customers
        ↓
Optimize Campaign Targeting
        ↓
Estimate Incremental Impact
        ↓
Evaluate Economic Feasibility
        ↓
Support Marketing Decisions
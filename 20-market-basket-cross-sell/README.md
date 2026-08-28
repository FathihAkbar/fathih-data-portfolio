# Market Basket Analysis & Cross-Sell Intelligence

## Overview

This project develops a Market Basket Analysis and Cross-Sell Intelligence system using transaction-level retail data.

The objective is to identify products that are frequently purchased together, discover statistically strong product associations, transform those associations into cross-sell recommendations, and estimate their potential business impact through scenario-based simulation.

The project goes beyond simple product-frequency analysis by combining:

- Transaction data preparation
- Basket construction
- Frequent itemset mining
- FP-Growth
- Association rule mining
- Support analysis
- Confidence analysis
- Lift analysis
- Leverage
- Conviction
- Cross-sell recommendation
- Product opportunity ranking
- Scenario-based impact simulation
- Business interpretation

The complete workflow is:

```text
Transaction Data
        ↓
Data Preparation
        ↓
Basket Construction
        ↓
Product Frequency Analysis
        ↓
FP-Growth
        ↓
Frequent Itemsets
        ↓
Association Rules
        ↓
Support / Confidence / Lift
        ↓
Cross-Sell Recommendation Engine
        ↓
Product Opportunity Ranking
        ↓
Impact Simulation
        ↓
Business Recommendations
Objectives

The main objectives of this project are:

Identify products that frequently appear together in customer transactions
Discover strong relationships between products
Evaluate product associations using statistical metrics
Build a reusable product recommendation mechanism
Identify high-potential cross-selling products
Estimate potential cross-sell conversions
Estimate potential incremental revenue under different response scenarios
Translate data mining results into actionable business strategies
Dataset

Dataset: Online Retail II

The project uses transaction-level retail data containing historical purchases from an online retail business.

The full dataset contains:

1,067,371 raw transaction records
8 original variables
Transactions from multiple yearly sheets
Customer, product, quantity, price, date, and country information

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

Why Market Basket Analysis?

Traditional product analysis answers questions such as:

Which products sell the most?

Market Basket Analysis answers a different question:

Which products tend to appear together in the same transaction?

This distinction is important for cross-selling.

For example:

Customer purchases Product A
        ↓
Historical basket patterns
        ↓
Product B frequently appears with A
        ↓
Recommend Product B

The objective is therefore not simply to identify popular products, but to discover meaningful relationships between products.

Step 1 — Transaction Data Preparation

The raw transaction data was transformed into a clean sales dataset suitable for basket analysis.

The preparation pipeline included:

Raw Transactions
        ↓
Customer ID Validation
        ↓
Duplicate Removal
        ↓
Cancellation Identification
        ↓
Transaction Validation
        ↓
Product Cleaning
        ↓
Revenue Calculation
        ↓
Basket-Ready Transactions
Raw Dataset
Metric	Value
Raw Records	1,067,371
Customers with ID	5,942
Invoices	53,628
Missing Customer ID	243,007
Duplicate rows removed	11,998
Cancellations removed	18,688
Invalid descriptions	0
Final Basket Dataset
Metric	Value
Transaction lines	793,669
Unique transactions	36,969
Unique customers	5,878
Unique products	4,631
Total units sold	1,067,581
Total revenue	17,685,460.64

The cleaned transaction data was used as the basis for subsequent basket analysis.

Basket Statistics

The resulting transaction baskets contained a wide range of product combinations.

Basket Size
Statistic	Products per Basket
Mean	20.80
Median	15.00
25th Percentile	6.00
75th Percentile	27.00
Minimum	1
Maximum	541

The maximum basket size reaches 541 unique products, indicating substantial variation in basket composition across transactions.

Step 2 — Basket Construction & Frequent Itemset Mining

The basket representation converts transaction records into a binary transaction-product matrix.

Rows    → Transactions
Columns → Products

Value:
1 = Product purchased
0 = Product not purchased

Rare products were filtered before constructing the final basket matrix.

Product Frequency Filter

The minimum transaction support threshold was:

0.50%

Products with transaction support below this threshold were removed.

Filtering Results
Products before filtering : 4,631
Products after filtering  : 1,180
Products removed           : 3,451

The resulting basket matrix had approximately:

35,916 transactions
×
1,180 products

with a density of approximately:

1.38%

This demonstrates that the transaction-product matrix is highly sparse.

FP-Growth

The FP-Growth algorithm was used to identify frequent product combinations.

The minimum itemset support was:

1.00%

The maximum itemset length was limited to:

3 products
Frequent Itemset Results

The initial FP-Growth analysis identified:

Itemset Type	Count
Single Products	574
Product Pairs	271
Product Triplets	54
Total Frequent Itemsets	899

This provides the foundation for association rule mining.

Most Frequent Products

Several products appeared frequently across customer baskets.

Among the highest-frequency products were:

WHITE HANGING HEART T-LIGHT HOLDER
REGENCY CAKESTAND 3 TIER
JUMBO BAG RED WHITE SPOTTY
ASSORTED COLOUR BIRD ORNAMENT
LUNCH BAG RED SPOTTY

These products have relatively high transaction support and therefore provide a useful basis for discovering associations.

Step 3 — Association Rule Mining

Frequent itemsets were converted into directional association rules.

The general structure is:

A → B

where:

A is the antecedent
B is the consequent

The rule describes the likelihood of observing B when A occurs.

The project evaluates association rules using:

Support
Confidence
Lift
Leverage
Conviction
Association Rule Metrics
Support

Support measures how frequently an itemset appears across all transactions.

Support(A → B)
=
Transactions containing A and B
/
Total Transactions

Higher support means the relationship occurs more frequently in the dataset.

Confidence

Confidence measures the probability of observing the consequent when the antecedent occurs.

Confidence(A → B)
=
Support(A ∪ B)
/
Support(A)

For example:

Confidence = 84%

means that approximately 84% of transactions containing the antecedent also contain the consequent, based on the observed transaction data.

Lift

Lift compares the observed co-occurrence against what would be expected if the two products were independent.

Lift(A → B)
=
Confidence(A → B)
/
Support(B)

Interpretation:

Lift > 1
→ Positive association

Lift ≈ 1
→ Weak / near-independent association

Lift < 1
→ Negative association

Lift was used as one of the primary metrics for identifying strong product relationships.

Leverage

Leverage measures the difference between the observed joint occurrence and the expected joint occurrence under independence.

Leverage
=
P(A ∩ B)
-
P(A)P(B)

Positive leverage indicates that the two products co-occur more often than expected by chance.

Conviction

Conviction evaluates the directional dependency between an antecedent and consequent.

It can provide additional context beyond confidence and lift when ranking directional rules.

Association Rule Results

The initial association-rule mining stage produced:

Total rules generated : 844

The meaningful-rule filter used:

Support    >= 0.50%
Confidence >= 20.00%
Lift       >= 1.20

The initial filtering produced:

Meaningful rules : 741
Rule Statistics
Metric	Result
Average Support	1.35%
Average Confidence	40.31%
Average Lift	11.61
Maximum Lift	53.64
Maximum Confidence	89.59%

These results indicate the presence of strong product associations within the transaction data.

Strong Association Examples

One of the strongest observed relationships was:

PINK REGENCY TEACUP AND SAUCER
        ↓
GREEN REGENCY TEACUP AND SAUCER

with approximately:

Support    : 1.77%
Confidence : 84.11%
Lift       : 31.93

This indicates a strong historical association between the two products.

Another strong relationship involved:

POPPY'S PLAYHOUSE LIVINGROOM
        ↓
POPPY'S PLAYHOUSE BEDROOM

with lift above 50 in the observed rules.

However, high lift should not be interpreted independently.

A very high lift can occur for relatively specific combinations, so practical evaluation should also consider:

Support
Confidence
Transaction frequency
Revenue
Product popularity
Step 4 — Cross-Sell Recommendation Engine

Association rules were transformed into a recommendation engine.

The recommendation structure is:

Input Product
      ↓
Historical Association Rules
      ↓
Candidate Products
      ↓
Confidence
+
Lift
+
Support
      ↓
Recommendation Ranking
      ↓
Top Cross-Sell Products

The recommendation engine focused on one-to-one product relationships.

The final recommendation layer contained:

1,191 one-to-one rules

and identified approximately:

174 products with outgoing recommendations
162 products receiving recommendations

The recommendation engine provides a reusable function conceptually equivalent to:

recommend_products(product_code, top_n=5)

which returns the strongest associated products for a selected product.

Example Recommendation

For example:

Input:
PINK REGENCY TEACUP AND SAUCER

The engine identifies:

GREEN REGENCY TEACUP AND SAUCER

as a strong recommendation candidate with:

Confidence ≈ 84.11%
Lift ≈ 31.93
Support ≈ 1.77%

This can support cross-selling during:

Checkout
Product browsing
Email campaigns
Promotional campaigns
Product bundling
Product Cross-Sell Opportunity

The project does not rank products using lift alone.

Instead, product-level opportunities consider multiple characteristics:

Transaction Frequency
        +
Association Strength
        +
Confidence
        +
Lift
        +
Recommendation Score

This reduces the risk of selecting an extremely rare product combination simply because it produces a high lift value.

Internal Recommendation Score

An internal prioritization score was created:

Recommendation Score
=
Confidence
×
log(1 + Lift)
×
√Support

This score is an internal business-prioritization metric.

It is not a standard statistical association-rule metric.

Its purpose is to help prioritize rules that simultaneously have meaningful:

Confidence
Lift
Support
Product Cross-Sell Opportunities

The product-level analysis identified products with strong cross-selling potential.

Some of the strongest opportunity products included:

POPPY'S PLAYHOUSE KITCHEN
GREEN REGENCY TEACUP AND SAUCER
ROSES REGENCY TEACUP AND SAUCER
POPPY'S PLAYHOUSE BEDROOM
BATHROOM METAL SIGN
KEY FOB, SHED
STRAWBERRY CERAMIC TRINKET BOX
GARDENERS KNEELING PAD KEEP CALM

The exact ranking depends on the selected rule set and recommendation score.

Recommendation Network

The project also analyzes how many different products can recommend a given product.

This creates a conceptual product recommendation network:

Product A
 ├── Product B
 ├── Product C
 └── Product D

Product B
 ├── Product E
 └── Product F

Products with many incoming or outgoing associations may represent central products within the cross-selling ecosystem.

Step 5 — Cross-Sell Impact Simulation

The final stage estimates the potential business impact of deploying cross-sell recommendations.

The model uses scenario-based response assumptions.

Three scenarios were defined:

Scenario	Assumed Response Rate
Conservative	5%
Base	10%
Optimistic	20%

These assumptions are hypothetical and are not observed conversion rates.

Simulation Results

The final simulation evaluated:

Rules before validation : 457
Rules after validation  : 457
Scenario Results
Scenario	Response Assumption	Estimated Conversions	Estimated Incremental Revenue
Conservative	5%	10,502	290,052.18
Base	10%	21,003	580,104.35
Optimistic	20%	42,007	1,160,208.70

Under the base scenario, the simulation estimates:

Estimated cross-sell conversions
≈ 21,003

Estimated incremental revenue
≈ 580,104.35

Again, these values are scenario-based estimates, not guaranteed revenue.

Top Revenue Opportunity

The product with the highest estimated cross-sell revenue opportunity in the simulation was:

WHITE HANGING HEART T-LIGHT HOLDER

with an estimated cross-sell revenue opportunity of approximately:

69,991.89

This reflects the model's scenario assumptions and association structure.

Cross-Sell Opportunity Ratio

A further analysis compares estimated cross-sell opportunity with the product's current revenue.

Opportunity-to-Revenue Ratio
=
Expected Cross-Sell Revenue
/
Current Product Revenue

This provides an additional perspective for identifying products where cross-selling may represent a relatively meaningful opportunity compared with their existing revenue.

Visualizations

The project generates several visual analyses:

Support Distribution

Shows how frequently association rules occur across transactions.

Confidence Distribution

Shows the distribution of conditional purchase probabilities across rules.

Lift Distribution

Shows the strength of associations relative to independence.

Confidence vs Lift

Helps identify rules that combine high confidence and strong association.

Product Cross-Sell Opportunity

Ranks products according to the internal opportunity score.

Expected Cross-Sell Revenue

Compares potential revenue across conservative, base, and optimistic scenarios.

Expected Cross-Sell Conversions

Compares the estimated number of conversions under each scenario.

Key Findings
1. Retail baskets contain strong product relationships

FP-Growth identified 899 frequent itemsets from the filtered transaction dataset.

These included:

574 single-product itemsets
271 product pairs
54 product triplets

This demonstrates substantial recurring product relationships.

2. Association rules can be very strong

The association-rule analysis generated 844 initial rules.

The strongest relationships reached:

Maximum Lift       : 53.64
Maximum Confidence : 89.59%

This indicates that several product combinations have substantially higher co-occurrence than would be expected from product frequencies alone.

3. Support remains important when interpreting lift

Some rules can have extremely high lift despite relatively limited support.

Therefore, the project does not use lift as the sole criterion for recommendation.

Instead, support, confidence, transaction frequency, and revenue context are also considered.

4. Product associations can be converted into actionable recommendations

The association rules were converted into a reusable product recommendation engine.

A selected product can be mapped to several recommended complementary products.

5. Cross-selling can be evaluated as a business opportunity

The final simulation demonstrates how association rules can be translated into estimated conversion and revenue scenarios.

Under the base 10% response assumption:

Estimated conversions : 21,003
Estimated revenue     : 580,104.35
6. Cross-sell opportunities are concentrated among specific products

Several products repeatedly appeared as strong recommendation targets.

This suggests that some products have broader cross-selling potential than others.

7. Product recommendation should combine statistical and business signals

The most useful cross-sell candidates should ideally have:

Strong Association
+
Sufficient Frequency
+
Meaningful Confidence
+
Positive Lift
+
Commercial Relevance

This creates a more practical recommendation strategy than simply ranking by lift.

Business Recommendations
Use Product-Level Cross-Selling

Strong historical product associations can be incorporated into product recommendation modules, checkout systems, and promotional campaigns.

Create Product Bundles

Products with high confidence and support can be packaged together to encourage multi-product purchases.

Prioritize High-Frequency Opportunities

Products with both strong associations and high transaction volumes should receive greater attention than extremely rare associations.

Use Recommendations at Checkout

Cross-selling can be implemented when customers have already selected one or more products.

For example:

Customer Basket
        ↓
Current Products
        ↓
Association Rules
        ↓
Recommended Complementary Products
Use Association Rules for Marketing Campaigns

Strong product relationships can inform:

Email recommendations
Product bundles
Promotional offers
Personalized product displays
Upselling strategies
Validate With A/B Testing

The impact simulation in this project is not causal.

Actual deployment should measure incremental performance through:

A/B testing
Holdout groups
Conversion experiments
Revenue lift measurements

This is necessary to determine whether recommendations create genuine incremental revenue rather than simply reflecting customers who would have purchased the additional product anyway.

Update Rules Periodically

Product relationships may change over time.

A production system should periodically recompute:

Frequent Itemsets
        ↓
Association Rules
        ↓
Recommendation Ranking

using recent transaction data.

Limitations
Association Does Not Imply Causation

A strong association does not mean that purchasing one product causes customers to purchase another product.

Historical Relationships

The discovered associations are based on historical transactions and may change in future periods.

Scenario-Based Revenue Simulation

The cross-sell revenue estimates use assumed response rates of 5%, 10%, and 20%.

These are hypothetical scenarios and are not observed conversion rates.

Product Popularity Effects

Highly popular products can influence support and confidence.

Lift is therefore especially important for determining whether a relationship is stronger than expected from baseline popularity.

Sparse Product Space

Thousands of products exist in the original dataset, while only a subset meet the minimum frequency threshold.

Public Dataset

The dataset represents a public retail dataset rather than a live commercial environment.

Future Improvements

Future versions could extend the system with:

Sequential pattern mining
Customer-specific recommendations
Product embeddings
Neural recommendation models
Collaborative filtering
Hybrid recommendation systems
Personalized ranking
Real-time recommendation API
Recommendation A/B testing
Incremental model updating
Product-category hierarchy
Margin-aware recommendations
Customer CLV integration
Churn-aware cross-selling
Recommendation diversity optimization
Business-rule constraints
Production recommendation dashboard

A more advanced architecture could combine customer-level intelligence from CLV modeling with product association intelligence:

Customer Value
      +
Customer Behavior
      +
Current Basket
      +
Product Associations
      ↓
Personalized Cross-Sell Recommendation
Technology Stack
Programming
Python
Pandas
NumPy
Machine Learning / Data Mining
mlxtend
FP-Growth
Association Rule Mining
Statistical Metrics
Support
Confidence
Lift
Leverage
Conviction
Visualization
Matplotlib
Development Environment
Google Colab
Jupyter Notebook
Git
GitHub
Project Structure
20-market-basket-cross-sell/
│
├── Market_Basket_Cross_Sell.ipynb
├── README.md
│
└── outputs/
    ├── frequent_itemsets.csv
    ├── association_rules.csv
    ├── cross_sell_recommendations.csv
    ├── product_opportunities.csv
    └── cross_sell_simulation.csv
Project Workflow
Online Retail II
        ↓
Data Cleaning
        ↓
Transaction Validation
        ↓
Basket Construction
        ↓
Product Frequency Filtering
        ↓
Sparse Basket Matrix
        ↓
FP-Growth
        ↓
Frequent Itemsets
        ↓
Association Rule Mining
        ↓
Support / Confidence / Lift
        ↓
Rule Filtering
        ↓
Cross-Sell Recommendation Engine
        ↓
Product Opportunity Ranking
        ↓
Impact Simulation
        ↓
Business Recommendations
Final Results

The project successfully developed a complete cross-sell intelligence workflow.

Data Scale
Raw transactions      : 1,067,371
Final transaction lines: 793,669
Transactions           : 36,969
Customers              : 5,878
Products               : 4,631
Countries              : 41
Revenue                : 17,685,460.64
Frequent Itemset Mining
Products after filter  : 1,180
Frequent itemsets      : 899

Single products        : 574
Product pairs          : 271
Product triplets       : 54
Association Rules
Initial rules          : 844
Meaningful rules       : 741

Average support        : 1.35%
Average confidence     : 40.31%
Average lift           : 11.61
Maximum lift           : 53.64
Maximum confidence    : 89.59%
Recommendation Engine
One-to-one rules       : 1,191
Products with rules    : 174
Products receiving     : 162
Impact Simulation
Conservative
→ 10,502 estimated conversions
→ 290,052.18 estimated revenue

Base
→ 21,003 estimated conversions
→ 580,104.35 estimated revenue

Optimistic
→ 42,007 estimated conversions
→ 1,160,208.70 estimated revenue
Final Conclusion

This project demonstrates how transaction-level retail data can be transformed into product association intelligence and cross-selling recommendations.

The workflow begins with transaction preparation and basket construction, followed by frequent itemset mining using FP-Growth.

Association rules were then evaluated using support, confidence, lift, leverage, and conviction to identify meaningful relationships between products.

The discovered relationships were transformed into a cross-sell recommendation engine capable of generating complementary product recommendations.

The project then extended the analysis into a business simulation layer, estimating potential cross-sell conversions and incremental revenue under conservative, base, and optimistic response assumptions.

Under the base scenario, the framework estimated:

21,003 cross-sell conversions
580,104.35 estimated incremental revenue

These values should be interpreted as scenario-based estimates rather than causal predictions or guaranteed business results.

Overall, the project demonstrates an end-to-end analytical workflow:

Transaction Data
        ↓
Data Mining
        ↓
Association Analysis
        ↓
Recommendation
        ↓
Business Opportunity

The resulting framework provides a foundation for more advanced recommendation systems that combine market basket analysis with customer segmentation, Customer Lifetime Value, churn prediction, personalization, and real-time recommendation infrastructure.
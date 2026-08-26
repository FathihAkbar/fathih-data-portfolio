# Fathih — Data & Machine Learning Portfolio

Welcome to my portfolio of data analysis, machine learning, and data-driven projects.

I am an engineering student interested in data science, machine learning, analytics, and software development. This repository documents my progression from exploratory data analysis and SQL to predictive modeling, customer analytics, natural language processing, time series forecasting, fraud detection, and recommendation systems.

Each project focuses on a different problem-solving approach, from understanding patterns in raw data to building machine learning models and translating results into practical insights.

## Skills

### Programming & Data Analysis

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- Exploratory Data Analysis (EDA)
- Data Cleaning
- Feature Engineering
- Statistical Analysis

### Machine Learning

- Scikit-learn
- Logistic Regression
- Decision Tree
- Random Forest
- XGBoost
- Classification
- Regression
- Hyperparameter Tuning
- Cross Validation
- Threshold Optimization
- Model Evaluation
- Feature Importance

### Data Science

- Customer Churn Prediction
- Customer Segmentation
- RFM Analysis
- Risk Scoring
- Time Series Forecasting
- Fraud Detection
- Recommendation Systems
- Collaborative Filtering

### Natural Language Processing

- Text Preprocessing
- TF-IDF
- N-gram Features
- Sentiment Analysis
- Logistic Regression for NLP
- Naive Bayes
- Linear SVM
- Error Analysis

### SQL & Database

- SQL
- SQLite
- SELECT
- GROUP BY
- HAVING
- CASE WHEN
- Subqueries
- Aggregation
- Business Data Analysis

### Tools

- Google Colab
- Jupyter Notebook
- Git
- GitHub
- VS Code

## Projects

| # | Project | Category |
|---|---|---|
| 1 | [Student Performance Analysis](./01-student-performance) | Exploratory Data Analysis |
| 2 | [Supermarket Sales Analysis](./02-supermarket-sales) | Business Analysis |
| 3 | [Spotify Music Analysis](./03-spotify-analysis) | Exploratory Data Analysis |
| 4 | [Netflix Movies & TV Shows](./04-netflix-analysis) | Exploratory Data Analysis |
| 5 | [Titanic Survival Prediction](./05-titanic-survival) | Classification |
| 6 | [House Price Prediction](./06-house-price) | Regression |
| 7 | [Video Game Sales SQL Analysis](./07-video-game-sales) | SQL & Data Analysis |
| 8 | [Customer Segmentation with RFM Analysis](./08-customer-segmentation) | Customer Analytics |
| 9 | [Customer Churn Prediction](./09-customer-churn-prediction) | Machine Learning |
| 10 | [Retail Sales Forecasting](./10-retail-sales-forecasting) | Time Series Forecasting |
| 11 | [Amazon Customer Review Sentiment Analysis](./11-amazon-sentiment-analysis) | NLP |
| 12 | [Credit Card Fraud Detection](./12-credit-card-fraud-detection) | Imbalanced Classification |
| 13 | [Movie Recommendation System](./13-movie-recommendation) | Recommendation System |

## Project Overview

### 01 — Student Performance Analysis

Exploratory data analysis project focused on understanding patterns in student academic performance.

**Main topics:**
- Data cleaning
- Exploratory analysis
- Data visualization
- Academic performance analysis

### 02 — Supermarket Sales Analysis

Business-oriented analysis of supermarket transactions to identify patterns in branches, products, customers, payments, and transaction time.

**Main topics:**
- Business KPIs
- Product analysis
- Customer analysis
- Payment analysis
- Time-based analysis

### 03 — Spotify Music Analysis

Large-scale exploratory analysis of Spotify tracks to examine popularity, genres, artists, and audio characteristics.

**Main topics:**
- Large dataset analysis
- Genre analysis
- Artist analysis
- Correlation analysis
- Audio feature exploration

### 04 — Netflix Movies & TV Shows

Analysis of Netflix content across content type, release trends, countries, ratings, genres, and durations.

**Main topics:**
- Time trend analysis
- Content analysis
- Genre analysis
- Country analysis
- Exploratory visualization

### 05 — Titanic Survival Prediction

Classification project predicting passenger survival using demographic and travel-related features.

Models evaluated include:

- Logistic Regression
- Decision Tree

**Main topics:**
- Classification
- Data preprocessing
- Categorical encoding
- Model evaluation
- Confusion matrix
- Feature interpretation

### 06 — House Price Prediction

Regression project predicting residential property prices using housing characteristics.

Models evaluated include:

- Linear Regression
- Random Forest

**Main topics:**
- Regression
- Feature selection
- Model comparison
- MAE
- RMSE
- R²
- Feature importance

### 07 — Video Game Sales SQL Analysis

SQL-based analysis of video game sales across platforms, genres, publishers, regions, and years.

**Main topics:**
- SQLite
- GROUP BY
- HAVING
- CASE WHEN
- Subqueries
- Aggregation
- Business insights

### 08 — Customer Segmentation with RFM Analysis

Customer segmentation project using Recency, Frequency, and Monetary analysis to identify customer behavior and value.

The analysis produced customer segments such as:

- Champions
- Loyal Customers
- Potential Loyalists
- Need Attention
- At Risk

**Main topics:**
- RFM analysis
- Customer segmentation
- Customer value analysis
- Behavioral profiling
- Business recommendations

### 09 — Customer Churn Prediction

Machine learning project designed to predict customers who are likely to churn.

Models evaluated:

- Logistic Regression
- Random Forest
- XGBoost

The project also includes:

- Feature engineering
- Cross-validation
- Hyperparameter tuning
- Threshold optimization
- Feature importance
- Customer risk scoring

The final risk profiling separates customers into High, Medium, and Low Risk groups to support customer retention strategies.

### 10 — Retail Sales Forecasting

Time series forecasting project using historical retail sales data.

The project compares:

- Naive Forecast
- Random Forest
- XGBoost

The workflow includes:

- Time-based feature engineering
- Lag features
- Rolling features
- Chronological train-test splitting
- Time-series cross-validation
- Forecast error analysis
- Feature importance

The analysis identified `Lag_52` as the most influential feature, highlighting the importance of annual sales patterns.

### 11 — Amazon Customer Review Sentiment Analysis

Natural Language Processing project classifying customer reviews into positive and negative sentiment.

Models evaluated:

- Logistic Regression
- Naive Bayes
- Linear SVM
- Tuned Logistic Regression

The project includes:

- Text cleaning
- TF-IDF
- Unigram and bigram features
- Hyperparameter tuning
- Confusion matrix
- Error analysis
- Feature interpretation

The final tuned Logistic Regression model achieved an F1-Score of approximately 91.65%.

### 12 — Credit Card Fraud Detection

Machine learning project focused on detecting fraudulent transactions under severe class imbalance.

Models evaluated:

- Logistic Regression
- Balanced Logistic Regression
- Random Forest
- XGBoost

The project focuses on:

- Class imbalance
- Precision-Recall analysis
- PR-AUC
- Threshold optimization
- Feature importance
- Fraud risk scoring
- Confusion matrix
- Business trade-offs

The final XGBoost model achieved approximately:

- 92.86% Precision
- 79.59% Recall
- 85.71% F1-Score
- 97.99% ROC-AUC
- 87.94% PR-AUC

### 13 — Movie Recommendation System

Recommendation system project using collaborative filtering on the MovieLens 1M dataset.

Three approaches were compared:

- Popularity Baseline
- User-Based Collaborative Filtering
- Item-Based Collaborative Filtering

Evaluation metrics:

- Precision@10
- Recall@10

User-Based Collaborative Filtering achieved the strongest performance with:

- Precision@10: 0.010946
- Recall@10: 0.109458

The project demonstrates how user-item interaction data can be transformed into personalized movie recommendations.

## Learning Progression

The projects represent a progression from fundamental analytics to more advanced data science applications:

```text
Exploratory Data Analysis
        ↓
Business Analytics
        ↓
SQL & Data Analysis
        ↓
Classification
        ↓
Regression
        ↓
Customer Segmentation
        ↓
Customer Churn Prediction
        ↓
Time Series Forecasting
        ↓
Natural Language Processing
        ↓
Fraud Detection
        ↓
Recommendation Systems

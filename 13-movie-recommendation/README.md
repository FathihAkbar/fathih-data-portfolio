# Movie Recommendation System with Collaborative Filtering

## Overview

This project develops a movie recommendation system using collaborative filtering on the MovieLens 1M dataset.

The system analyzes historical user-movie rating interactions to identify similarities between users and movies and generate personalized Top-N movie recommendations.

The project compares three recommendation approaches:

1. Popularity Baseline
2. User-Based Collaborative Filtering
3. Item-Based Collaborative Filtering

The main objective is to evaluate whether personalized collaborative filtering can provide more relevant recommendations than simply recommending the most popular movies.

## Objectives

- Understand user-movie interaction data
- Analyze movie rating patterns
- Explore movie popularity and genre statistics
- Build a user-item interaction matrix
- Analyze matrix sparsity
- Develop a popularity-based recommendation baseline
- Build User-Based Collaborative Filtering
- Build Item-Based Collaborative Filtering
- Generate personalized Top-N recommendations
- Evaluate recommendations using Precision@10 and Recall@10
- Compare personalized recommendation approaches
- Generate business-oriented insights

## Dataset

**Dataset:** MovieLens 1M

The dataset contains movie ratings collected from users and includes three main data sources:

### Ratings

The ratings dataset contains:

- `UserID`
- `MovieID`
- `Rating`
- `Timestamp`

The dataset contains:

**1,000,209 ratings**

### Movies

The movie dataset contains:

- `MovieID`
- `Title`
- `Genres`

The dataset contains:

**3,883 movies**

### Users

The user dataset contains:

- `UserID`
- `Gender`
- `Age`
- `Occupation`
- `ZipCode`

The dataset contains:

**6,040 users**

## Tools & Technologies

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- Scikit-learn
- Cosine Similarity
- Collaborative Filtering
- Google Colab

## Workflow

```text
MovieLens 1M
      ↓
Data Loading
      ↓
Data Understanding
      ↓
Rating Analysis
      ↓
Movie Popularity Analysis
      ↓
Genre Analysis
      ↓
User Activity Analysis
      ↓
User-Item Matrix
      ↓
Sparsity Analysis
      ↓
Popularity Baseline
      ↓
User-Based Collaborative Filtering
      ↓
Item-Based Collaborative Filtering
      ↓
Top-N Recommendation
      ↓
Precision@10
      ↓
Recall@10
      ↓
Model Comparison
      ↓
Business Insight
      ↓
Conclusion
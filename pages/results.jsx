import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import { URLSearchParams } from "url";

// Third Party
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

// Internal
import Layout from "../components/layout";
import styles from "../styles/Results.module.scss";

mapboxgl.accessToken =
  "pk.eyJ1IjoiemhqMDkyNCIsImEiOiJja3ZnangxdXljMXBlMnBtYTF0c29oN2N3In0.HsgAF-xISYEHuqdLlpJL2A";
const base_url = "https://reroot-data-app.herokuapp.com/";

const selectedFactors = [];

const counties_10 = {
  "02230": {
    county_name: "Skagway Municipality, AK",
    coordinates: [59.6, -135.3],
    county_details: {
      diversity_cultural_index: 0.04,
      diversity_economic_index: 0.84,
      diversity_lgbt_percentage: 0.14,
      environment_air_index: 0.14,
      environment_noise_index: 0.37,
      environment_water_index: 0.41,
      housing_mortgage_median: 0.88,
      housing_rent_median: 947.11,
      immigrant_language_arabic_count: 399,
      immigrant_language_chinese_count: 288,
      immigrant_language_other_count: 203,
      immigrant_language_spanish_count: 663,
      immigrant_language_arabic_percentage: 0.65,
      immigrant_language_chinese_percentage: 0.04,
      immigrant_language_other_percentage: 0.8,
      immigrant_language_spanish_percentage: 0.99,
      immigrant_origin_china_count: 215,
      immigrant_origin_india_count: 172,
      immigrant_origin_mexico_count: 534,
      immigrant_origin_other_count: 949,
      immigrant_origin_china_percentage: 0.99,
      immigrant_origin_india_percentage: 0.99,
      immigrant_origin_mexico_percentage: 0.99,
      immigrant_origin_other_percentage: 0.99,
      opportunity_employment_percentage: 0.99,
      opportunity_population_count: "9,636",
      service_banking_index: 0.99,
      service_internet_index: 0.99,
      service_library_index: 0.99,
      service_medical_index: 0.99,
      service_senior_index: 0.14,
      service_transportation_index: 0.14,
      tax_education_percentage: 0.37,
      tax_other_percentage: 0.99,
      tax_welfare_percentage: 0.99,
      vote_local_index: 0.99,
      vote_national_index: 0.99,
    },
    rank_details: {
      diversity_cultural_rank: 0.98,
      diversity_economic_rank: 0.86,
      diversity_lgbt_rank: 0.13,
      environment_air_rank: 0.19,
      environment_noise_rank: 0.27,
      environment_water_rank: 0.95,
      housing_mortgage_rank: 0.38,
      housing_rent_rank: 0.52,
      immigrant_language_arabic_rank: 0.37,
      immigrant_language_chinese_rank: 0.23,
      immigrant_language_other_rank: 0.74,
      immigrant_language_spanish_rank: 0.41,
      immigrant_origin_china_rank: 0.99,
      immigrant_origin_india_rank: 0.99,
      immigrant_origin_mexico_rank: 0.99,
      immigrant_origin_other_rank: 0.99,
      opportunity_employment_rank: 0.99,
      opportunity_population_high_rank: 0.99,
      opportunity_population_low_rank: 0.99,
      opportunity_population_medium_rank: 0.99,
      service_banking_rank: 0.99,
      service_internet_rank: 0.99,
      service_library_rank: 0.99,
      service_medical_rank: 0.99,
      service_senior_rank: 0.13,
      service_transportation_rank: 0.19,
      tax_education_rank: 0.27,
      tax_other_rank: 0.99,
      tax_welfare_rank: 0.99,
      vote_local_rank: 0.99,
      vote_national_rank: 0.99,
    },
  },
  20143: {
    county_name: "Ottawa County, KS",
    coordinates: [39.1, -97.7],
    county_details: {
      diversity_cultural_index: 0.73,
      diversity_economic_index: 0.33,
      diversity_lgbt_percentage: 0.37,
      environment_air_index: 0.09,
      environment_noise_index: 0.53,
      environment_water_index: 0.24,
      housing_mortgage_median: 0.61,
      housing_rent_median: 404.13,
      immigrant_language_arabic_count: 500,
      immigrant_language_chinese_count: 534,
      immigrant_language_other_count: 511,
      immigrant_language_spanish_count: 908,
      immigrant_language_arabic_percentage: 0.2,
      immigrant_language_chinese_percentage: 0.37,
      immigrant_language_other_percentage: 0.77,
      immigrant_language_spanish_percentage: 0.86,
      immigrant_origin_china_count: 14,
      immigrant_origin_india_count: 750,
      immigrant_origin_mexico_count: 279,
      immigrant_origin_other_count: 775,
      immigrant_origin_china_percentage: 0.92,
      immigrant_origin_india_percentage: 0.92,
      immigrant_origin_mexico_percentage: 0.92,
      immigrant_origin_other_percentage: 0.92,
      opportunity_employment_percentage: 0.92,
      opportunity_population_count: "6,973",
      service_banking_index: 0.92,
      service_internet_index: 0.92,
      service_library_index: 0.92,
      service_medical_index: 0.92,
      service_senior_index: 0.37,
      service_transportation_index: 0.09,
      tax_education_percentage: 0.53,
      tax_other_percentage: 0.92,
      tax_welfare_percentage: 0.92,
      vote_local_index: 0.92,
      vote_national_index: 0.92,
    },
    rank_details: {
      diversity_cultural_rank: 0.94,
      diversity_economic_rank: 0.5,
      diversity_lgbt_rank: 0.94,
      environment_air_rank: 0.87,
      environment_noise_rank: 0.52,
      environment_water_rank: 0.9,
      housing_mortgage_rank: 0.97,
      housing_rent_rank: 0.34,
      immigrant_language_arabic_rank: 0.07,
      immigrant_language_chinese_rank: 0.33,
      immigrant_language_other_rank: 0.63,
      immigrant_language_spanish_rank: 0.04,
      immigrant_origin_china_rank: 0.92,
      immigrant_origin_india_rank: 0.92,
      immigrant_origin_mexico_rank: 0.92,
      immigrant_origin_other_rank: 0.92,
      opportunity_employment_rank: 0.92,
      opportunity_population_high_rank: 0.92,
      opportunity_population_low_rank: 0.92,
      opportunity_population_medium_rank: 0.92,
      service_banking_rank: 0.92,
      service_internet_rank: 0.92,
      service_library_rank: 0.92,
      service_medical_rank: 0.92,
      service_senior_rank: 0.94,
      service_transportation_rank: 0.87,
      tax_education_rank: 0.52,
      tax_other_rank: 0.92,
      tax_welfare_rank: 0.92,
      vote_local_rank: 0.92,
      vote_national_rank: 0.92,
    },
  },
  21141: {
    county_name: "Logan County, KY",
    coordinates: [36.9, -86.9],
    county_details: {
      diversity_cultural_index: 0.8,
      diversity_economic_index: 0.19,
      diversity_lgbt_percentage: 0.04,
      environment_air_index: 0.19,
      environment_noise_index: 0.98,
      environment_water_index: 0.21,
      housing_mortgage_median: 0.15,
      housing_rent_median: 1133.73,
      immigrant_language_arabic_count: 359,
      immigrant_language_chinese_count: 204,
      immigrant_language_other_count: 784,
      immigrant_language_spanish_count: 104,
      immigrant_language_arabic_percentage: 0.69,
      immigrant_language_chinese_percentage: 0.26,
      immigrant_language_other_percentage: 0.61,
      immigrant_language_spanish_percentage: 0.4,
      immigrant_origin_china_count: 575,
      immigrant_origin_india_count: 77,
      immigrant_origin_mexico_count: 904,
      immigrant_origin_other_count: 621,
      immigrant_origin_china_percentage: 0.86,
      immigrant_origin_india_percentage: 0.86,
      immigrant_origin_mexico_percentage: 0.86,
      immigrant_origin_other_percentage: 0.86,
      opportunity_employment_percentage: 0.86,
      opportunity_population_count: "8,314",
      service_banking_index: 0.86,
      service_internet_index: 0.86,
      service_library_index: 0.86,
      service_medical_index: 0.86,
      service_senior_index: 0.04,
      service_transportation_index: 0.19,
      tax_education_percentage: 0.98,
      tax_other_percentage: 0.86,
      tax_welfare_percentage: 0.86,
      vote_local_index: 0.86,
      vote_national_index: 0.86,
    },
    rank_details: {
      diversity_cultural_rank: 0.98,
      diversity_economic_rank: 0.91,
      diversity_lgbt_rank: 0.29,
      environment_air_rank: 0.67,
      environment_noise_rank: 0.11,
      environment_water_rank: 0.97,
      housing_mortgage_rank: 0.44,
      housing_rent_rank: 0.1,
      immigrant_language_arabic_rank: 0.31,
      immigrant_language_chinese_rank: 0.34,
      immigrant_language_other_rank: 0.68,
      immigrant_language_spanish_rank: 0.07,
      immigrant_origin_china_rank: 0.86,
      immigrant_origin_india_rank: 0.86,
      immigrant_origin_mexico_rank: 0.86,
      immigrant_origin_other_rank: 0.86,
      opportunity_employment_rank: 0.86,
      opportunity_population_high_rank: 0.86,
      opportunity_population_low_rank: 0.86,
      opportunity_population_medium_rank: 0.86,
      service_banking_rank: 0.86,
      service_internet_rank: 0.86,
      service_library_rank: 0.86,
      service_medical_rank: 0.86,
      service_senior_rank: 0.29,
      service_transportation_rank: 0.67,
      tax_education_rank: 0.11,
      tax_other_rank: 0.86,
      tax_welfare_rank: 0.86,
      vote_local_rank: 0.86,
      vote_national_rank: 0.86,
    },
  },
  29209: {
    county_name: "Stone County, MO",
    coordinates: [36.7, -93.5],
    county_details: {
      diversity_cultural_index: 0.64,
      diversity_economic_index: 0.92,
      diversity_lgbt_percentage: 0.21,
      environment_air_index: 0.44,
      environment_noise_index: 0.67,
      environment_water_index: 0.16,
      housing_mortgage_median: 0.05,
      housing_rent_median: 1071.99,
      immigrant_language_arabic_count: 823,
      immigrant_language_chinese_count: 447,
      immigrant_language_other_count: 106,
      immigrant_language_spanish_count: 47,
      immigrant_language_arabic_percentage: 0.69,
      immigrant_language_chinese_percentage: 0.15,
      immigrant_language_other_percentage: 0.61,
      immigrant_language_spanish_percentage: 0.43,
      immigrant_origin_china_count: 845,
      immigrant_origin_india_count: 168,
      immigrant_origin_mexico_count: 763,
      immigrant_origin_other_count: 900,
      immigrant_origin_china_percentage: 0.99,
      immigrant_origin_india_percentage: 0.99,
      immigrant_origin_mexico_percentage: 0.99,
      immigrant_origin_other_percentage: 0.99,
      opportunity_employment_percentage: 0.99,
      opportunity_population_count: "6,714",
      service_banking_index: 0.99,
      service_internet_index: 0.99,
      service_library_index: 0.99,
      service_medical_index: 0.99,
      service_senior_index: 0.21,
      service_transportation_index: 0.44,
      tax_education_percentage: 0.67,
      tax_other_percentage: 0.99,
      tax_welfare_percentage: 0.99,
      vote_local_index: 0.99,
      vote_national_index: 0.99,
    },
    rank_details: {
      diversity_cultural_rank: 0.95,
      diversity_economic_rank: 0.5,
      diversity_lgbt_rank: 0.82,
      environment_air_rank: 0.55,
      environment_noise_rank: 1.0,
      environment_water_rank: 0.89,
      housing_mortgage_rank: 0.97,
      housing_rent_rank: 0.12,
      immigrant_language_arabic_rank: 0.77,
      immigrant_language_chinese_rank: 0.57,
      immigrant_language_other_rank: 0.84,
      immigrant_language_spanish_rank: 0.53,
      immigrant_origin_china_rank: 0.99,
      immigrant_origin_india_rank: 0.99,
      immigrant_origin_mexico_rank: 0.99,
      immigrant_origin_other_rank: 0.99,
      opportunity_employment_rank: 0.99,
      opportunity_population_high_rank: 0.99,
      opportunity_population_low_rank: 0.99,
      opportunity_population_medium_rank: 0.99,
      service_banking_rank: 0.99,
      service_internet_rank: 0.99,
      service_library_rank: 0.99,
      service_medical_rank: 0.99,
      service_senior_rank: 0.82,
      service_transportation_rank: 0.55,
      tax_education_rank: 1.0,
      tax_other_rank: 0.99,
      tax_welfare_rank: 0.99,
      vote_local_rank: 0.99,
      vote_national_rank: 0.99,
    },
  },
  31047: {
    county_name: "Dawson County, NE",
    coordinates: [40.9, -99.8],
    county_details: {
      diversity_cultural_index: 0.69,
      diversity_economic_index: 0.88,
      diversity_lgbt_percentage: 0.86,
      environment_air_index: 0.0,
      environment_noise_index: 0.19,
      environment_water_index: 0.23,
      housing_mortgage_median: 0.78,
      housing_rent_median: 17.69,
      immigrant_language_arabic_count: 659,
      immigrant_language_chinese_count: 358,
      immigrant_language_other_count: 426,
      immigrant_language_spanish_count: 198,
      immigrant_language_arabic_percentage: 0.18,
      immigrant_language_chinese_percentage: 0.32,
      immigrant_language_other_percentage: 0.96,
      immigrant_language_spanish_percentage: 0.23,
      immigrant_origin_china_count: 206,
      immigrant_origin_india_count: 586,
      immigrant_origin_mexico_count: 65,
      immigrant_origin_other_count: 948,
      immigrant_origin_china_percentage: 0.92,
      immigrant_origin_india_percentage: 0.92,
      immigrant_origin_mexico_percentage: 0.92,
      immigrant_origin_other_percentage: 0.92,
      opportunity_employment_percentage: 0.92,
      opportunity_population_count: "1,941",
      service_banking_index: 0.92,
      service_internet_index: 0.92,
      service_library_index: 0.92,
      service_medical_index: 0.92,
      service_senior_index: 0.86,
      service_transportation_index: 0.0,
      tax_education_percentage: 0.19,
      tax_other_percentage: 0.92,
      tax_welfare_percentage: 0.92,
      vote_local_index: 0.92,
      vote_national_index: 0.92,
    },
    rank_details: {
      diversity_cultural_rank: 0.97,
      diversity_economic_rank: 0.67,
      diversity_lgbt_rank: 0.7,
      environment_air_rank: 0.2,
      environment_noise_rank: 0.36,
      environment_water_rank: 0.86,
      housing_mortgage_rank: 0.3,
      housing_rent_rank: 0.31,
      immigrant_language_arabic_rank: 0.28,
      immigrant_language_chinese_rank: 0.45,
      immigrant_language_other_rank: 0.73,
      immigrant_language_spanish_rank: 0.73,
      immigrant_origin_china_rank: 0.92,
      immigrant_origin_india_rank: 0.92,
      immigrant_origin_mexico_rank: 0.92,
      immigrant_origin_other_rank: 0.92,
      opportunity_employment_rank: 0.92,
      opportunity_population_high_rank: 0.92,
      opportunity_population_low_rank: 0.92,
      opportunity_population_medium_rank: 0.92,
      service_banking_rank: 0.92,
      service_internet_rank: 0.92,
      service_library_rank: 0.92,
      service_medical_rank: 0.92,
      service_senior_rank: 0.7,
      service_transportation_rank: 0.2,
      tax_education_rank: 0.36,
      tax_other_rank: 0.92,
      tax_welfare_rank: 0.92,
      vote_local_rank: 0.92,
      vote_national_rank: 0.92,
    },
  },
  36059: {
    county_name: "Nassau County, NY",
    coordinates: [40.7, -73.6],
    county_details: {
      diversity_cultural_index: 0.99,
      diversity_economic_index: 0.99,
      diversity_lgbt_percentage: 0.99,
      environment_air_index: 0.99,
      environment_noise_index: 0.99,
      environment_water_index: 0.99,
      housing_mortgage_median: 0.99,
      housing_rent_median: 376.26,
      immigrant_language_arabic_count: 376,
      immigrant_language_chinese_count: 799,
      immigrant_language_other_count: 157,
      immigrant_language_spanish_count: 773,
      immigrant_language_arabic_percentage: 0.99,
      immigrant_language_chinese_percentage: 0.99,
      immigrant_language_other_percentage: 0.99,
      immigrant_language_spanish_percentage: 0.99,
      immigrant_origin_china_count: 805,
      immigrant_origin_india_count: 360,
      immigrant_origin_mexico_count: 169,
      immigrant_origin_other_count: 354,
      immigrant_origin_china_percentage: 0.99,
      immigrant_origin_india_percentage: 0.99,
      immigrant_origin_mexico_percentage: 0.99,
      immigrant_origin_other_percentage: 0.99,
      opportunity_employment_percentage: 0.99,
      opportunity_population_count: "1,585,873",
      service_banking_index: 0.99,
      service_internet_index: 0.99,
      service_library_index: 0.99,
      service_medical_index: 0.99,
      service_senior_index: 0.99,
      service_transportation_index: 0.99,
      tax_education_percentage: 0.99,
      tax_other_percentage: 0.99,
      tax_welfare_percentage: 0.99,
      vote_local_index: 0.99,
      vote_national_index: 0.99,
    },
    rank_details: {
      diversity_cultural_rank: 0.99,
      diversity_economic_rank: 0.99,
      diversity_lgbt_rank: 0.99,
      environment_air_rank: 0.99,
      environment_noise_rank: 0.99,
      environment_water_rank: 0.99,
      housing_mortgage_rank: 0.99,
      housing_rent_rank: 0.99,
      immigrant_language_arabic_rank: 0.99,
      immigrant_language_chinese_rank: 0.99,
      immigrant_language_other_rank: 0.99,
      immigrant_language_spanish_rank: 0.99,
      immigrant_origin_china_rank: 0.99,
      immigrant_origin_india_rank: 0.99,
      immigrant_origin_mexico_rank: 0.99,
      immigrant_origin_other_rank: 0.99,
      opportunity_employment_rank: 0.99,
      opportunity_population_high_rank: 0.99,
      opportunity_population_low_rank: 0.99,
      opportunity_population_medium_rank: 0.99,
      service_banking_rank: 0.99,
      service_internet_rank: 0.99,
      service_library_rank: 0.99,
      service_medical_rank: 0.99,
      service_senior_rank: 0.99,
      service_transportation_rank: 0.99,
      tax_education_rank: 0.99,
      tax_other_rank: 0.99,
      tax_welfare_rank: 0.99,
      vote_local_rank: 0.99,
      vote_national_rank: 0.99,
    },
  },
  39003: {
    county_name: "Allen County, OH",
    coordinates: [40.8, -84.1],
    county_details: {
      diversity_cultural_index: 0.34,
      diversity_economic_index: 0.08,
      diversity_lgbt_percentage: 0.56,
      environment_air_index: 0.64,
      environment_noise_index: 0.8,
      environment_water_index: 0.55,
      housing_mortgage_median: 0.2,
      housing_rent_median: 281.91,
      immigrant_language_arabic_count: 284,
      immigrant_language_chinese_count: 895,
      immigrant_language_other_count: 578,
      immigrant_language_spanish_count: 319,
      immigrant_language_arabic_percentage: 0.87,
      immigrant_language_chinese_percentage: 0.2,
      immigrant_language_other_percentage: 0.37,
      immigrant_language_spanish_percentage: 0.93,
      immigrant_origin_china_count: 963,
      immigrant_origin_india_count: 638,
      immigrant_origin_mexico_count: 676,
      immigrant_origin_other_count: 764,
      immigrant_origin_china_percentage: 0.95,
      immigrant_origin_india_percentage: 0.95,
      immigrant_origin_mexico_percentage: 0.95,
      immigrant_origin_other_percentage: 0.95,
      opportunity_employment_percentage: 0.95,
      opportunity_population_count: "53,139",
      service_banking_index: 0.95,
      service_internet_index: 0.95,
      service_library_index: 0.95,
      service_medical_index: 0.95,
      service_senior_index: 0.56,
      service_transportation_index: 0.64,
      tax_education_percentage: 0.8,
      tax_other_percentage: 0.95,
      tax_welfare_percentage: 0.95,
      vote_local_index: 0.95,
      vote_national_index: 0.95,
    },
    rank_details: {
      diversity_cultural_rank: 0.91,
      diversity_economic_rank: 0.17,
      diversity_lgbt_rank: 0.91,
      environment_air_rank: 1.0,
      environment_noise_rank: 0.37,
      environment_water_rank: 0.95,
      housing_mortgage_rank: 0.23,
      housing_rent_rank: 0.9,
      immigrant_language_arabic_rank: 0.73,
      immigrant_language_chinese_rank: 0.25,
      immigrant_language_other_rank: 0.38,
      immigrant_language_spanish_rank: 0.81,
      immigrant_origin_china_rank: 0.95,
      immigrant_origin_india_rank: 0.95,
      immigrant_origin_mexico_rank: 0.95,
      immigrant_origin_other_rank: 0.95,
      opportunity_employment_rank: 0.95,
      opportunity_population_high_rank: 0.95,
      opportunity_population_low_rank: 0.95,
      opportunity_population_medium_rank: 0.95,
      service_banking_rank: 0.95,
      service_internet_rank: 0.95,
      service_library_rank: 0.95,
      service_medical_rank: 0.95,
      service_senior_rank: 0.91,
      service_transportation_rank: 1.0,
      tax_education_rank: 0.37,
      tax_other_rank: 0.95,
      tax_welfare_rank: 0.95,
      vote_local_rank: 0.95,
      vote_national_rank: 0.95,
    },
  },
  41057: {
    county_name: "Tillamook County, OR",
    coordinates: [45.5, -123.8],
    county_details: {
      diversity_cultural_index: 0.36,
      diversity_economic_index: 0.96,
      diversity_lgbt_percentage: 0.5,
      environment_air_index: 0.55,
      environment_noise_index: 0.55,
      environment_water_index: 0.35,
      housing_mortgage_median: 0.93,
      housing_rent_median: 291.3,
      immigrant_language_arabic_count: 933,
      immigrant_language_chinese_count: 914,
      immigrant_language_other_count: 321,
      immigrant_language_spanish_count: 397,
      immigrant_language_arabic_percentage: 0.7,
      immigrant_language_chinese_percentage: 0.71,
      immigrant_language_other_percentage: 0.61,
      immigrant_language_spanish_percentage: 0.77,
      immigrant_origin_china_count: 192,
      immigrant_origin_india_count: 833,
      immigrant_origin_mexico_count: 787,
      immigrant_origin_other_count: 720,
      immigrant_origin_china_percentage: 0.99,
      immigrant_origin_india_percentage: 0.99,
      immigrant_origin_mexico_percentage: 0.99,
      immigrant_origin_other_percentage: 0.99,
      opportunity_employment_percentage: 0.99,
      opportunity_population_count: "75,889",
      service_banking_index: 0.99,
      service_internet_index: 0.99,
      service_library_index: 0.99,
      service_medical_index: 0.99,
      service_senior_index: 0.5,
      service_transportation_index: 0.55,
      tax_education_percentage: 0.55,
      tax_other_percentage: 0.99,
      tax_welfare_percentage: 0.99,
      vote_local_index: 0.99,
      vote_national_index: 0.99,
    },
    rank_details: {
      diversity_cultural_rank: 0.88,
      diversity_economic_rank: 0.41,
      diversity_lgbt_rank: 0.89,
      environment_air_rank: 0.03,
      environment_noise_rank: 0.7,
      environment_water_rank: 0.98,
      housing_mortgage_rank: 0.28,
      housing_rent_rank: 0.53,
      immigrant_language_arabic_rank: 0.2,
      immigrant_language_chinese_rank: 0.01,
      immigrant_language_other_rank: 0.5,
      immigrant_language_spanish_rank: 0.91,
      immigrant_origin_china_rank: 0.99,
      immigrant_origin_india_rank: 0.99,
      immigrant_origin_mexico_rank: 0.99,
      immigrant_origin_other_rank: 0.99,
      opportunity_employment_rank: 0.99,
      opportunity_population_high_rank: 0.99,
      opportunity_population_low_rank: 0.99,
      opportunity_population_medium_rank: 0.99,
      service_banking_rank: 0.99,
      service_internet_rank: 0.99,
      service_library_rank: 0.99,
      service_medical_rank: 0.99,
      service_senior_rank: 0.89,
      service_transportation_rank: 0.03,
      tax_education_rank: 0.7,
      tax_other_rank: 0.99,
      tax_welfare_rank: 0.99,
      vote_local_rank: 0.99,
      vote_national_rank: 0.99,
    },
  },
  48031: {
    county_name: "Blanco County, TX",
    coordinates: [30.3, -98.4],
    county_details: {
      diversity_cultural_index: 0.19,
      diversity_economic_index: 0.76,
      diversity_lgbt_percentage: 0.04,
      environment_air_index: 0.15,
      environment_noise_index: 0.69,
      environment_water_index: 0.19,
      housing_mortgage_median: 0.55,
      housing_rent_median: 869.49,
      immigrant_language_arabic_count: 513,
      immigrant_language_chinese_count: 181,
      immigrant_language_other_count: 896,
      immigrant_language_spanish_count: 930,
      immigrant_language_arabic_percentage: 0.79,
      immigrant_language_chinese_percentage: 0.34,
      immigrant_language_other_percentage: 0.14,
      immigrant_language_spanish_percentage: 0.58,
      immigrant_origin_china_count: 477,
      immigrant_origin_india_count: 797,
      immigrant_origin_mexico_count: 168,
      immigrant_origin_other_count: 776,
      immigrant_origin_china_percentage: 0.89,
      immigrant_origin_india_percentage: 0.89,
      immigrant_origin_mexico_percentage: 0.89,
      immigrant_origin_other_percentage: 0.89,
      opportunity_employment_percentage: 0.89,
      opportunity_population_count: "641",
      service_banking_index: 0.89,
      service_internet_index: 0.89,
      service_library_index: 0.89,
      service_medical_index: 0.89,
      service_senior_index: 0.04,
      service_transportation_index: 0.15,
      tax_education_percentage: 0.69,
      tax_other_percentage: 0.89,
      tax_welfare_percentage: 0.89,
      vote_local_index: 0.89,
      vote_national_index: 0.89,
    },
    rank_details: {
      diversity_cultural_rank: 0.98,
      diversity_economic_rank: 0.46,
      diversity_lgbt_rank: 0.7,
      environment_air_rank: 0.54,
      environment_noise_rank: 0.43,
      environment_water_rank: 0.9,
      housing_mortgage_rank: 0.21,
      housing_rent_rank: 0.14,
      immigrant_language_arabic_rank: 0.8,
      immigrant_language_chinese_rank: 0.21,
      immigrant_language_other_rank: 0.03,
      immigrant_language_spanish_rank: 0.98,
      immigrant_origin_china_rank: 0.89,
      immigrant_origin_india_rank: 0.89,
      immigrant_origin_mexico_rank: 0.89,
      immigrant_origin_other_rank: 0.89,
      opportunity_employment_rank: 0.89,
      opportunity_population_high_rank: 0.89,
      opportunity_population_low_rank: 0.89,
      opportunity_population_medium_rank: 0.89,
      service_banking_rank: 0.89,
      service_internet_rank: 0.89,
      service_library_rank: 0.89,
      service_medical_rank: 0.89,
      service_senior_rank: 0.7,
      service_transportation_rank: 0.54,
      tax_education_rank: 0.43,
      tax_other_rank: 0.89,
      tax_welfare_rank: 0.89,
      vote_local_rank: 0.89,
      vote_national_rank: 0.89,
    },
  },
  55135: {
    county_name: "Waupaca County, WI",
    coordinates: [44.5, -89.0],
    county_details: {
      diversity_cultural_index: 0.61,
      diversity_economic_index: 0.32,
      diversity_lgbt_percentage: 0.45,
      environment_air_index: 0.29,
      environment_noise_index: 0.46,
      environment_water_index: 0.15,
      housing_mortgage_median: 0.41,
      housing_rent_median: 418.03,
      immigrant_language_arabic_count: 191,
      immigrant_language_chinese_count: 158,
      immigrant_language_other_count: 305,
      immigrant_language_spanish_count: 866,
      immigrant_language_arabic_percentage: 0.42,
      immigrant_language_chinese_percentage: 0.44,
      immigrant_language_other_percentage: 0.75,
      immigrant_language_spanish_percentage: 0.07,
      immigrant_origin_china_count: 946,
      immigrant_origin_india_count: 153,
      immigrant_origin_mexico_count: 996,
      immigrant_origin_other_count: 850,
      immigrant_origin_china_percentage: 0.93,
      immigrant_origin_india_percentage: 0.93,
      immigrant_origin_mexico_percentage: 0.93,
      immigrant_origin_other_percentage: 0.93,
      opportunity_employment_percentage: 0.93,
      opportunity_population_count: "24,496",
      service_banking_index: 0.93,
      service_internet_index: 0.93,
      service_library_index: 0.93,
      service_medical_index: 0.93,
      service_senior_index: 0.45,
      service_transportation_index: 0.29,
      tax_education_percentage: 0.46,
      tax_other_percentage: 0.93,
      tax_welfare_percentage: 0.93,
      vote_local_index: 0.93,
      vote_national_index: 0.93,
    },
    rank_details: {
      diversity_cultural_rank: 0.98,
      diversity_economic_rank: 0.05,
      diversity_lgbt_rank: 0.42,
      environment_air_rank: 0.59,
      environment_noise_rank: 0.64,
      environment_water_rank: 0.82,
      housing_mortgage_rank: 0.36,
      housing_rent_rank: 0.88,
      immigrant_language_arabic_rank: 0.87,
      immigrant_language_chinese_rank: 0.67,
      immigrant_language_other_rank: 0.64,
      immigrant_language_spanish_rank: 0.42,
      immigrant_origin_china_rank: 0.93,
      immigrant_origin_india_rank: 0.93,
      immigrant_origin_mexico_rank: 0.93,
      immigrant_origin_other_rank: 0.93,
      opportunity_employment_rank: 0.93,
      opportunity_population_high_rank: 0.93,
      opportunity_population_low_rank: 0.93,
      opportunity_population_medium_rank: 0.93,
      service_banking_rank: 0.93,
      service_internet_rank: 0.93,
      service_library_rank: 0.93,
      service_medical_rank: 0.93,
      service_senior_rank: 0.42,
      service_transportation_rank: 0.59,
      tax_education_rank: 0.64,
      tax_other_rank: 0.93,
      tax_welfare_rank: 0.93,
      vote_local_rank: 0.93,
      vote_national_rank: 0.93,
    },
  },
};

function Results({ scores }) {
  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [favCounties, setFavCounties] = useState([]);

  // TODO1 Add all the pins
  // TODO2 Implement Accordion with pagination
  // TODO3 Click on the item will center it in the map

  // sort by score, descending
  for (const [code, score] of Object.entries(scores)) {
    score.code = code;
  }

  const top = Object.keys(scores).sort(
    (a, b) => scores[b].score - scores[a].score
  );
  const top_ = (n) => top.slice(0, n).map((c) => scores[c]);
  for (const [code, county] of Object.entries(counties_10)) {
    county.code = code;
    county.name = county.county_name;
  }
  const counties = Object.values(counties_10);
  counties.forEach((c, i) => {
    let s = top_(10)[i];
    c.score = s.score;
    c.lngLat = { lon: c.coordinates[1], lat: c.coordinates[0] };
    c.breakdown = {};
    for (const [k, v] of Object.entries(s)) {
      if (k === "score" || k === "code") {
        continue;
      }
      c.breakdown[k] = v;
    }
  });

  console.log(counties[0]);
  const myMap = useRef();

  // Map configurations
  useEffect(() => {
    setPageIsMounted(true);
    const map = new mapboxgl.Map({
      container: "my-map",
      style: "mapbox://styles/zhj0924/ckwd55u2n5fb314pc0egsi3ii",
      center: [-77.02, 38.887],
      zoom: 12.5,
      pitch: 45,
    });

    myMap.current = map;

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );

    // Populate markers
    counties.forEach((county) => {
      new mapboxgl.Marker({
        color: "red",
      })
        .setLngLat(county.lngLat)
        .setPopup(new mapboxgl.Popup().setHTML(`<h1>${county.name}</h1>`))
        .addTo(map);
    });
  }, [counties]);

  return (
    <Layout results>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
          rel="stylesheet"
        />
        <title>Results</title>
      </Head>

      <section>
        <div className="row">
          <div className="col-2">
            <div className="flex-shrink-0 p-3 bg-white" width={280}>
              <a className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                <span className="fs-5 fw-semibold">Preference</span>
              </a>
              <ul className="list-unstyled ps0">
                <li className="mb-1">
                  <button
                    className="btn btn-toggle align-items-center rounded collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#home-collapse"
                    aria-expanded="true"
                  >
                    Home
                  </button>
                  <div className="collapse show" id="home-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li>
                        <a href="#" className="link-dark rounded">
                          Overview
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-10">
            {/* Map */}
            <div className="row map">
              <div className={styles.map} id="my-map" />
            </div>

            <div className="row favorite">
              <div className="fav-title">FAVORITED COUNTIES</div>
              <div className="fav-list">
                {favCounties.map((county) => (
                  <div className="fav-item row" key={county.code}>
                    <p style={{ color: "red" }}>
                      {county.name}
                      <input
                        type="button"
                        value="X"
                        onClick={() => {
                          const newFavCounties = favCounties.filter(
                            (c) => c !== county
                          );
                          setFavCounties(newFavCounties);
                        }}
                      />
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="row counties">
              <div className="counties-title">ALL COUNTIES</div>
              <div className="accordion counties-list" id="accordionCounties">
                {counties.map((county) => (
                  // Accordion Item
                  <div className="accordion-item" key={county.code}>
                    <h2
                      className="accordion-header"
                      id={`heading-${county.code}`}
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${county.code}`}
                        aria-expanded="false"
                        aria-controls={`collapse-${county.code}`}
                        onClick={() => {
                          myMap.current.flyTo({
                            center: county.lngLat,
                            zoom: 12.5,
                          });
                        }}
                      >
                        {county.name}
                      </button>
                    </h2>

                    <div className="row">
                      <div className="col-10 progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={county.score}
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-label={county.name}
                          style={{ width: `${county.score * 10}%` }}
                        ></div>
                      </div>

                      <div className="col-2">
                        <input
                          type="button"
                          name={`like-${county.code}`}
                          value="♡"
                          onClick={() => {
                            if (
                              favCounties.some((c) => c.name == county.name)
                            ) {
                            } else {
                              setFavCounties([...favCounties, county]);
                            }
                          }}
                        />
                      </div>
                    </div>

                    <div
                      className="accordion-collapse collapse"
                      id={`collapse-${county.code}`}
                      aria-labelledby={`heading-${county.code}`}
                      data-bs-parent="#accordionCounties"
                    >
                      <div className="accordion-body">
                        {Object.entries(county.breakdown).map(
                          ([factor, score]) => (
                            <div key={factor}>{`${factor}: ${score}`}</div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const sample_params = new URLSearchParams({
    diversity_cultural: 3,
    environment_water: 2,
    service_internet: 4,
  });

  const res_scores = await fetch(base_url + "scores?" + sample_params);
  const scores = await res_scores.json();

  if (!scores) {
    return {
      scoreNotFound: true,
    };
  }

  return {
    props: { scores }, // will be passed to the page component as props
  };
}

export default Results;
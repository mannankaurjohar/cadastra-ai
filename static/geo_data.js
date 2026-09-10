/**
 * CadastraAI Master Cadastral Geospatial Demonstration Dataset
 * Pre-packaged high-resolution vector & metadata payload
 */
window.CADASTRA_DATA = {
  "metadata": {
    "dataset_name": "CadastraAI Demonstration UAV Cadastral Dataset",
    "location": "Sector 4 Urban Expansion Zone, Bengaluru Metropolitan Area",
    "survey_date": "2026-08-30",
    "drone_model": "DJI Matrice 350 RTK + Zenmuse P1 (45MP Full-Frame)",
    "total_uav_images": 24,
    "coverage_area_hectares": 4.8,
    "ground_sampling_distance_cm": 5.0,
    "image_overlap_pct": "85% Forward / 80% Lateral",
    "coordinate_reference_system": "EPSG:4326 (WGS84) / UTM Zone 43N",
    "summary_statistics": {
      "total_parcels": 87,
      "total_buildings": 142,
      "total_road_length_km": 3.6,
      "average_confidence_pct": 91.4,
      "valid_geometries_initial": 82,
      "overlap_anomalies_initial": 3,
      "gap_anomalies_initial": 2,
      "ground_verified_parcels": 61,
      "pending_verification_parcels": 26
    },
    "responsible_ai_disclaimer": "AI-generated parcel boundaries are preliminary and do NOT determine legal land ownership. Ground verification and official cadastral procedures are mandatory."
  },
  "parcels": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "P-001",
        "properties": {
          "parcel_id": "P-001",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 436.1,
          "perimeter_m": 84.4,
          "confidence": 95.3,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.594776,
            12.971798
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 7.0,
            "impervious_surface_pct": 65.8
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5946896,
                12.9716881
              ],
              [
                77.5948577,
                12.9716907
              ],
              [
                77.5948569,
                12.9719043
              ],
              [
                77.5946893,
                12.9719073
              ],
              [
                77.5946896,
                12.9716881
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-002",
        "properties": {
          "parcel_id": "P-002",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 428.5,
          "perimeter_m": 83.7,
          "confidence": 97.1,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.594942,
            12.971798
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 21.1,
            "impervious_surface_pct": 68.8
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5948606,
                12.9716913
              ],
              [
                77.5950288,
                12.9716872
              ],
              [
                77.5950245,
                12.9719051
              ],
              [
                77.5948615,
                12.9719045
              ],
              [
                77.5948606,
                12.9716913
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-003",
        "properties": {
          "parcel_id": "P-003",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 423.7,
          "perimeter_m": 83.4,
          "confidence": 95.8,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595108,
            12.971798
          ],
          "extracted_features": {
            "buildings_count": 0,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 33.7,
            "impervious_surface_pct": 91.9
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.595028,
                12.971693
              ],
              [
                77.5951892,
                12.9716865
              ],
              [
                77.5951909,
                12.9719094
              ],
              [
                77.5950274,
                12.9719048
              ],
              [
                77.595028,
                12.971693
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-004",
        "properties": {
          "parcel_id": "P-004",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 434.6,
          "perimeter_m": 84.3,
          "confidence": 98.0,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595275,
            12.971798
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 6.5,
            "impervious_surface_pct": 77.9
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5951921,
                12.9716917
              ],
              [
                77.5953555,
                12.9716886
              ],
              [
                77.5953616,
                12.9719069
              ],
              [
                77.595192,
                12.9719081
              ],
              [
                77.5951921,
                12.9716917
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-005",
        "properties": {
          "parcel_id": "P-005",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 430.1,
          "perimeter_m": 83.8,
          "confidence": 93.6,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595441,
            12.971798
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 14.5,
            "impervious_surface_pct": 85.3
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5953586,
                12.9716888
              ],
              [
                77.5955227,
                12.9716913
              ],
              [
                77.5955231,
                12.9719046
              ],
              [
                77.5953554,
                12.9719074
              ],
              [
                77.5953586,
                12.9716888
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-006",
        "properties": {
          "parcel_id": "P-006",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 426.7,
          "perimeter_m": 83.5,
          "confidence": 92.2,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595608,
            12.971798
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 13.5,
            "impervious_surface_pct": 70.7
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955268,
                12.9716886
              ],
              [
                77.5956921,
                12.9716933
              ],
              [
                77.5956882,
                12.9719035
              ],
              [
                77.5955216,
                12.9719067
              ],
              [
                77.5955268,
                12.9716886
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-007",
        "properties": {
          "parcel_id": "P-007",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 429.5,
          "perimeter_m": 83.8,
          "confidence": 92.7,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.594776,
            12.972014
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 34.3,
            "impervious_surface_pct": 86.9
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5946937,
                12.9719053
              ],
              [
                77.5948593,
                12.971909
              ],
              [
                77.5948624,
                12.9721243
              ],
              [
                77.5946956,
                12.9721206
              ],
              [
                77.5946937,
                12.9719053
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-008",
        "properties": {
          "parcel_id": "P-008",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 425.8,
          "perimeter_m": 83.4,
          "confidence": 93.1,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.594942,
            12.972014
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 24.2,
            "impervious_surface_pct": 75.8
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5948612,
                12.971909
              ],
              [
                77.5950232,
                12.9719075
              ],
              [
                77.5950245,
                12.9721209
              ],
              [
                77.5948557,
                12.9721245
              ],
              [
                77.5948612,
                12.971909
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-009",
        "properties": {
          "parcel_id": "P-009",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 434.2,
          "perimeter_m": 84.3,
          "confidence": 92.7,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595108,
            12.972014
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 23.5,
            "impervious_surface_pct": 73.1
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5950265,
                12.9719051
              ],
              [
                77.5951931,
                12.9719067
              ],
              [
                77.5951894,
                12.9721237
              ],
              [
                77.5950244,
                12.9721243
              ],
              [
                77.5950265,
                12.9719051
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-010",
        "properties": {
          "parcel_id": "P-010",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 432.2,
          "perimeter_m": 83.9,
          "confidence": 68.5,
          "confidence_tier": "Low (Needs Review)",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595275,
            12.972014
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 34.5,
            "impervious_surface_pct": 81.5
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5951927,
                12.9719051
              ],
              [
                77.5953604,
                12.9719081
              ],
              [
                77.5953594,
                12.9721205
              ],
              [
                77.5951895,
                12.9721191
              ],
              [
                77.5951927,
                12.9719051
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-011",
        "properties": {
          "parcel_id": "P-011",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 425.4,
          "perimeter_m": 83.4,
          "confidence": 92.7,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595441,
            12.972014
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 23.4,
            "impervious_surface_pct": 84.4
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5953585,
                12.9719093
              ],
              [
                77.5955217,
                12.9719037
              ],
              [
                77.5955242,
                12.9721227
              ],
              [
                77.5953585,
                12.9721212
              ],
              [
                77.5953585,
                12.9719093
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-012",
        "properties": {
          "parcel_id": "P-012",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 427.7,
          "perimeter_m": 83.6,
          "confidence": 92.6,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595608,
            12.972014
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 21.3,
            "impervious_surface_pct": 76.2
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955233,
                12.9719091
              ],
              [
                77.5956878,
                12.9719038
              ],
              [
                77.59569,
                12.97212
              ],
              [
                77.5955224,
                12.9721219
              ],
              [
                77.5955233,
                12.9719091
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-013",
        "properties": {
          "parcel_id": "P-013",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 431.1,
          "perimeter_m": 84.0,
          "confidence": 91.6,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.594776,
            12.972231
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 27.6,
            "impervious_surface_pct": 87.5
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5946919,
                12.9721252
              ],
              [
                77.5948565,
                12.9721208
              ],
              [
                77.5948576,
                12.9723384
              ],
              [
                77.5946912,
                12.9723415
              ],
              [
                77.5946919,
                12.9721252
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-014",
        "properties": {
          "parcel_id": "P-014",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 442.1,
          "perimeter_m": 85.0,
          "confidence": 92.5,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.594942,
            12.972231
          ],
          "extracted_features": {
            "buildings_count": 0,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 23.0,
            "impervious_surface_pct": 68.3
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5948622,
                12.9721218
              ],
              [
                77.5950269,
                12.9721195
              ],
              [
                77.5950267,
                12.9723397
              ],
              [
                77.5948559,
                12.9723407
              ],
              [
                77.5948622,
                12.9721218
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-015",
        "properties": {
          "parcel_id": "P-015",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 427.1,
          "perimeter_m": 83.6,
          "confidence": 91.7,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595108,
            12.972231
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 8.2,
            "impervious_surface_pct": 90.9
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5950288,
                12.9721246
              ],
              [
                77.5951905,
                12.972122
              ],
              [
                77.5951907,
                12.9723388
              ],
              [
                77.5950241,
                12.9723413
              ],
              [
                77.5950288,
                12.9721246
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-016",
        "properties": {
          "parcel_id": "P-016",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 438.3,
          "perimeter_m": 84.5,
          "confidence": 79.1,
          "confidence_tier": "Moderate",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595275,
            12.972231
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 19.6,
            "impervious_surface_pct": 74.6
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5951886,
                12.9721253
              ],
              [
                77.5953562,
                12.9721223
              ],
              [
                77.5953589,
                12.9723379
              ],
              [
                77.5951882,
                12.9723413
              ],
              [
                77.5951886,
                12.9721253
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-017",
        "properties": {
          "parcel_id": "P-017",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 433.5,
          "perimeter_m": 84.1,
          "confidence": 96.1,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595441,
            12.972231
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 15.6,
            "impervious_surface_pct": 77.3
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.595356,
                12.9721239
              ],
              [
                77.5955231,
                12.9721231
              ],
              [
                77.5955243,
                12.972339
              ],
              [
                77.5953575,
                12.9723405
              ],
              [
                77.595356,
                12.9721239
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-018",
        "properties": {
          "parcel_id": "P-018",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 475.8,
          "perimeter_m": 87.8,
          "confidence": 96.2,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": false,
          "topology_status": "Overlap Anomaly",
          "centroid": [
            77.595608,
            12.972231
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 9.5,
            "impervious_surface_pct": 80.2
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955279,
                12.9721207
              ],
              [
                77.59571024086706,
                12.9721197
              ],
              [
                77.59570434086706,
                12.9723387
              ],
              [
                77.5955251,
                12.9723401
              ],
              [
                77.5955279,
                12.9721207
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-019",
        "properties": {
          "parcel_id": "P-019",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 424.9,
          "perimeter_m": 83.2,
          "confidence": 98.2,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": false,
          "topology_status": "Overlap Anomaly",
          "centroid": [
            77.594776,
            12.972447
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 17.3,
            "impervious_surface_pct": 83.6
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5946942,
                12.972342
              ],
              [
                77.5948567,
                12.9723367
              ],
              [
                77.59486,
                12.9725525
              ],
              [
                77.59469,
                12.9725519
              ],
              [
                77.5946942,
                12.972342
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-020",
        "properties": {
          "parcel_id": "P-020",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 432.3,
          "perimeter_m": 84.1,
          "confidence": 97.3,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.594942,
            12.972447
          ],
          "extracted_features": {
            "buildings_count": 0,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 14.1,
            "impervious_surface_pct": 75.9
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5948613,
                12.9723356
              ],
              [
                77.5950228,
                12.9723374
              ],
              [
                77.5950271,
                12.9725555
              ],
              [
                77.5948573,
                12.9725522
              ],
              [
                77.5948613,
                12.9723356
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-021",
        "properties": {
          "parcel_id": "P-021",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 433.5,
          "perimeter_m": 84.1,
          "confidence": 96.5,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595108,
            12.972447
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 33.9,
            "impervious_surface_pct": 87.6
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5950236,
                12.972339
              ],
              [
                77.5951912,
                12.9723394
              ],
              [
                77.5951946,
                12.9725566
              ],
              [
                77.595026,
                12.9725515
              ],
              [
                77.5950236,
                12.972339
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-022",
        "properties": {
          "parcel_id": "P-022",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 435.3,
          "perimeter_m": 84.3,
          "confidence": 95.4,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595275,
            12.972447
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 6.1,
            "impervious_surface_pct": 67.4
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5951904,
                12.97234
              ],
              [
                77.5953607,
                12.9723375
              ],
              [
                77.5953595,
                12.9725534
              ],
              [
                77.595195,
                12.9725572
              ],
              [
                77.5951904,
                12.97234
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-023",
        "properties": {
          "parcel_id": "P-023",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 427.8,
          "perimeter_m": 83.5,
          "confidence": 93.5,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595441,
            12.972447
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 16.5,
            "impervious_surface_pct": 89.9
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5953555,
                12.9723419
              ],
              [
                77.595523,
                12.9723402
              ],
              [
                77.5955239,
                12.9725548
              ],
              [
                77.5953579,
                12.9725546
              ],
              [
                77.5953555,
                12.9723419
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-024",
        "properties": {
          "parcel_id": "P-024",
          "block": "Block A (Sector 4-A)",
          "area_sqm": 428.6,
          "perimeter_m": 83.7,
          "confidence": 97.2,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595608,
            12.972447
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 30.7,
            "impervious_surface_pct": 76.1
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955233,
                12.9723391
              ],
              [
                77.5956912,
                12.9723384
              ],
              [
                77.5956896,
                12.9725527
              ],
              [
                77.595526,
                12.9725555
              ],
              [
                77.5955233,
                12.9723391
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-025",
        "properties": {
          "parcel_id": "P-025",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 422.5,
          "perimeter_m": 83.1,
          "confidence": 76.1,
          "confidence_tier": "Moderate",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595977,
            12.971798
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 25.8,
            "impervious_surface_pct": 82.5
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5958973,
                12.9716866
              ],
              [
                77.5960581,
                12.9716928
              ],
              [
                77.5960642,
                12.9719032
              ],
              [
                77.5958964,
                12.9719046
              ],
              [
                77.5958973,
                12.9716866
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-026",
        "properties": {
          "parcel_id": "P-026",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 431.2,
          "perimeter_m": 83.9,
          "confidence": 91.7,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.596144,
            12.971798
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 32.0,
            "impervious_surface_pct": 83.3
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5960598,
                12.9716914
              ],
              [
                77.5962271,
                12.9716907
              ],
              [
                77.5962251,
                12.9719073
              ],
              [
                77.5960604,
                12.9719075
              ],
              [
                77.5960598,
                12.9716914
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-027",
        "properties": {
          "parcel_id": "P-027",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 426.2,
          "perimeter_m": 83.6,
          "confidence": 93.1,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.59631,
            12.971798
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 28.3,
            "impervious_surface_pct": 71.2
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5962295,
                12.9716893
              ],
              [
                77.5963899,
                12.9716927
              ],
              [
                77.5963956,
                12.9719097
              ],
              [
                77.5962301,
                12.9719081
              ],
              [
                77.5962295,
                12.9716893
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-028",
        "properties": {
          "parcel_id": "P-028",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 446.3,
          "perimeter_m": 85.4,
          "confidence": 97.1,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.596477,
            12.971798
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 16.0,
            "impervious_surface_pct": 86.3
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5963933,
                12.971687
              ],
              [
                77.5965618,
                12.9716881
              ],
              [
                77.5965612,
                12.9719076
              ],
              [
                77.5963928,
                12.9719088
              ],
              [
                77.5963933,
                12.971687
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-029",
        "properties": {
          "parcel_id": "P-029",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 425.7,
          "perimeter_m": 83.5,
          "confidence": 97.4,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.596643,
            12.971798
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 11.5,
            "impervious_surface_pct": 77.0
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5965617,
                12.9716876
              ],
              [
                77.5967257,
                12.9716872
              ],
              [
                77.5967263,
                12.9719056
              ],
              [
                77.5965633,
                12.9719029
              ],
              [
                77.5965617,
                12.9716876
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-030",
        "properties": {
          "parcel_id": "P-030",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 416.6,
          "perimeter_m": 82.6,
          "confidence": 91.3,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.59681,
            12.971798
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 10.2,
            "impervious_surface_pct": 66.4
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5967266,
                12.9716922
              ],
              [
                77.5968899,
                12.9716927
              ],
              [
                77.59689,
                12.9719053
              ],
              [
                77.5967285,
                12.9719069
              ],
              [
                77.5967266,
                12.9716922
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-031",
        "properties": {
          "parcel_id": "P-031",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 440.4,
          "perimeter_m": 84.7,
          "confidence": 95.1,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595977,
            12.972014
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 8.8,
            "impervious_surface_pct": 81.9
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5958941,
                12.9719056
              ],
              [
                77.5960621,
                12.9719062
              ],
              [
                77.5960637,
                12.9721194
              ],
              [
                77.5958912,
                12.9721233
              ],
              [
                77.5958941,
                12.9719056
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-032",
        "properties": {
          "parcel_id": "P-032",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 426.5,
          "perimeter_m": 83.6,
          "confidence": 95.1,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.596144,
            12.972014
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 7.0,
            "impervious_surface_pct": 87.5
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5960631,
                12.9719056
              ],
              [
                77.5962288,
                12.971905
              ],
              [
                77.5962257,
                12.9721208
              ],
              [
                77.5960641,
                12.9721239
              ],
              [
                77.5960631,
                12.9719056
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-033",
        "properties": {
          "parcel_id": "P-033",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 431.4,
          "perimeter_m": 83.9,
          "confidence": 78.1,
          "confidence_tier": "Moderate",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.59631,
            12.972014
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 22.2,
            "impervious_surface_pct": 86.8
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5962242,
                12.9719064
              ],
              [
                77.596391,
                12.9719062
              ],
              [
                77.5963961,
                12.9721214
              ],
              [
                77.5962275,
                12.9721197
              ],
              [
                77.5962242,
                12.9719064
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-034",
        "properties": {
          "parcel_id": "P-034",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 429.6,
          "perimeter_m": 83.8,
          "confidence": 92.7,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.596477,
            12.972014
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 15.4,
            "impervious_surface_pct": 68.0
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5963944,
                12.9719076
              ],
              [
                77.5965582,
                12.9719075
              ],
              [
                77.5965598,
                12.9721221
              ],
              [
                77.5963918,
                12.9721244
              ],
              [
                77.5963944,
                12.9719076
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-035",
        "properties": {
          "parcel_id": "P-035",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 422.3,
          "perimeter_m": 82.9,
          "confidence": 91.7,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.596643,
            12.972014
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 18.8,
            "impervious_surface_pct": 67.1
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.596559,
                12.9719078
              ],
              [
                77.5967263,
                12.9719087
              ],
              [
                77.5967286,
                12.9721194
              ],
              [
                77.5965626,
                12.9721192
              ],
              [
                77.596559,
                12.9719078
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-036",
        "properties": {
          "parcel_id": "P-036",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 442.3,
          "perimeter_m": 85.0,
          "confidence": 93.0,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.59681,
            12.972014
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 20.3,
            "impervious_surface_pct": 89.5
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5967256,
                12.9719033
              ],
              [
                77.5968955,
                12.9719081
              ],
              [
                77.5968907,
                12.9721245
              ],
              [
                77.5967232,
                12.9721235
              ],
              [
                77.5967256,
                12.9719033
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-037",
        "properties": {
          "parcel_id": "P-037",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 447.2,
          "perimeter_m": 85.5,
          "confidence": 96.5,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595977,
            12.972231
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 22.4,
            "impervious_surface_pct": 90.8
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5958939,
                12.9721193
              ],
              [
                77.5960632,
                12.9721195
              ],
              [
                77.5960634,
                12.9723413
              ],
              [
                77.5958951,
                12.9723388
              ],
              [
                77.5958939,
                12.9721193
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-038",
        "properties": {
          "parcel_id": "P-038",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 430.7,
          "perimeter_m": 83.9,
          "confidence": 75.8,
          "confidence_tier": "Moderate",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.596144,
            12.972231
          ],
          "extracted_features": {
            "buildings_count": 0,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 22.9,
            "impervious_surface_pct": 86.3
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5960622,
                12.9721261
              ],
              [
                77.5962273,
                12.9721233
              ],
              [
                77.5962261,
                12.9723418
              ],
              [
                77.5960599,
                12.9723407
              ],
              [
                77.5960622,
                12.9721261
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-039",
        "properties": {
          "parcel_id": "P-039",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 429.3,
          "perimeter_m": 84.0,
          "confidence": 96.5,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.59631,
            12.972231
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 15.0,
            "impervious_surface_pct": 80.7
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5962282,
                12.9721194
              ],
              [
                77.5963905,
                12.9721238
              ],
              [
                77.5963919,
                12.9723404
              ],
              [
                77.5962283,
                12.9723417
              ],
              [
                77.5962282,
                12.9721194
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-040",
        "properties": {
          "parcel_id": "P-040",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 436.6,
          "perimeter_m": 84.3,
          "confidence": 98.4,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.596477,
            12.972231
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 30.3,
            "impervious_surface_pct": 67.7
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.59639,
                12.9721211
              ],
              [
                77.5965633,
                12.9721214
              ],
              [
                77.5965619,
                12.9723365
              ],
              [
                77.5963972,
                12.9723363
              ],
              [
                77.59639,
                12.9721211
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-041",
        "properties": {
          "parcel_id": "P-041",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 439.3,
          "perimeter_m": 84.8,
          "confidence": 98.3,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.596643,
            12.972231
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 21.6,
            "impervious_surface_pct": 67.8
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5965599,
                12.9721219
              ],
              [
                77.5967238,
                12.9721204
              ],
              [
                77.5967271,
                12.9723414
              ],
              [
                77.5965566,
                12.9723386
              ],
              [
                77.5965599,
                12.9721219
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-042",
        "properties": {
          "parcel_id": "P-042",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 433.9,
          "perimeter_m": 84.2,
          "confidence": 85.6,
          "confidence_tier": "Moderate",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.59681,
            12.972231
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 12.1,
            "impervious_surface_pct": 68.3
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5967227,
                12.9721195
              ],
              [
                77.5968909,
                12.9721249
              ],
              [
                77.5968931,
                12.9723404
              ],
              [
                77.5967265,
                12.9723359
              ],
              [
                77.5967227,
                12.9721195
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-043",
        "properties": {
          "parcel_id": "P-043",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 426.7,
          "perimeter_m": 83.5,
          "confidence": 95.2,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595977,
            12.972447
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 29.9,
            "impervious_surface_pct": 83.5
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.595896,
                12.9723397
              ],
              [
                77.5960627,
                12.9723404
              ],
              [
                77.5960595,
                12.9725517
              ],
              [
                77.5958946,
                12.9725572
              ],
              [
                77.595896,
                12.9723397
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-044",
        "properties": {
          "parcel_id": "P-044",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 404.9,
          "perimeter_m": 81.0,
          "confidence": 92.2,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": false,
          "topology_status": "Overlap Anomaly",
          "centroid": [
            77.596144,
            12.972447
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 31.7,
            "impervious_surface_pct": 85.1
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5960573,
                12.9723398
              ],
              [
                77.5962255,
                12.9723413
              ],
              [
                77.5962238,
                12.972542586486487
              ],
              [
                77.596059,
                12.972543586486486
              ],
              [
                77.5960573,
                12.9723398
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-045",
        "properties": {
          "parcel_id": "P-045",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 417.1,
          "perimeter_m": 82.3,
          "confidence": 91.2,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": false,
          "topology_status": "Overlap Anomaly",
          "centroid": [
            77.59631,
            12.972447
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 34.9,
            "impervious_surface_pct": 72.4
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5962256,
                12.97234911081081
              ],
              [
                77.5963951,
                12.97234711081081
              ],
              [
                77.5963931,
                12.9725546
              ],
              [
                77.5962288,
                12.9725579
              ],
              [
                77.5962256,
                12.9723383
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-046",
        "properties": {
          "parcel_id": "P-046",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 431.6,
          "perimeter_m": 84.1,
          "confidence": 91.2,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.596477,
            12.972447
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 8.7,
            "impervious_surface_pct": 88.0
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5963966,
                12.972336
              ],
              [
                77.596562,
                12.9723402
              ],
              [
                77.5965578,
                12.9725558
              ],
              [
                77.596395,
                12.9725585
              ],
              [
                77.5963966,
                12.972336
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-047",
        "properties": {
          "parcel_id": "P-047",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 425.7,
          "perimeter_m": 83.5,
          "confidence": 97.5,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.596643,
            12.972447
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 23.4,
            "impervious_surface_pct": 67.3
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5965635,
                12.9723408
              ],
              [
                77.5967244,
                12.9723387
              ],
              [
                77.5967253,
                12.9725555
              ],
              [
                77.5965597,
                12.9725584
              ],
              [
                77.5965635,
                12.9723408
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-048",
        "properties": {
          "parcel_id": "P-048",
          "block": "Block B (Sector 4-B)",
          "area_sqm": 422.5,
          "perimeter_m": 83.3,
          "confidence": 93.0,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.59681,
            12.972447
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 31.8,
            "impervious_surface_pct": 87.8
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5967294,
                12.9723355
              ],
              [
                77.59689,
                12.9723362
              ],
              [
                77.5968903,
                12.9725537
              ],
              [
                77.5967279,
                12.9725538
              ],
              [
                77.5967294,
                12.9723355
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-049",
        "properties": {
          "parcel_id": "P-049",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 440.1,
          "perimeter_m": 84.8,
          "confidence": 93.8,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.594776,
            12.972879
          ],
          "extracted_features": {
            "buildings_count": 0,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 34.6,
            "impervious_surface_pct": 74.3
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5946893,
                12.972768
              ],
              [
                77.5948584,
                12.9727711
              ],
              [
                77.5948567,
                12.9729882
              ],
              [
                77.5946911,
                12.972989
              ],
              [
                77.5946893,
                12.972768
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-050",
        "properties": {
          "parcel_id": "P-050",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 427.0,
          "perimeter_m": 83.5,
          "confidence": 76.1,
          "confidence_tier": "Moderate",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.594942,
            12.972879
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 13.7,
            "impervious_surface_pct": 75.4
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5948581,
                12.972773
              ],
              [
                77.5950254,
                12.9727683
              ],
              [
                77.5950234,
                12.9729847
              ],
              [
                77.5948585,
                12.9729848
              ],
              [
                77.5948581,
                12.972773
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-051",
        "properties": {
          "parcel_id": "P-051",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 432.3,
          "perimeter_m": 84.3,
          "confidence": 96.3,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595108,
            12.972879
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 5.2,
            "impervious_surface_pct": 67.9
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5950287,
                12.9727691
              ],
              [
                77.5951906,
                12.9727679
              ],
              [
                77.5951916,
                12.9729901
              ],
              [
                77.5950264,
                12.9729872
              ],
              [
                77.5950287,
                12.9727691
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-052",
        "properties": {
          "parcel_id": "P-052",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 435.4,
          "perimeter_m": 84.3,
          "confidence": 67.4,
          "confidence_tier": "Low (Needs Review)",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595275,
            12.972879
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 29.5,
            "impervious_surface_pct": 74.9
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5951909,
                12.972772
              ],
              [
                77.5953606,
                12.9727718
              ],
              [
                77.5953581,
                12.9729875
              ],
              [
                77.5951916,
                12.9729878
              ],
              [
                77.5951909,
                12.972772
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-053",
        "properties": {
          "parcel_id": "P-053",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 418.4,
          "perimeter_m": 82.7,
          "confidence": 60.3,
          "confidence_tier": "Low (Needs Review)",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595441,
            12.972879
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 14.4,
            "impervious_surface_pct": 69.1
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5953597,
                12.9727732
              ],
              [
                77.5955236,
                12.9727735
              ],
              [
                77.5955226,
                12.9729879
              ],
              [
                77.5953596,
                12.9729852
              ],
              [
                77.5953597,
                12.9727732
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-054",
        "properties": {
          "parcel_id": "P-054",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 435.2,
          "perimeter_m": 84.2,
          "confidence": 62.2,
          "confidence_tier": "Low (Needs Review)",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595608,
            12.972879
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 13.4,
            "impervious_surface_pct": 73.1
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955233,
                12.9727701
              ],
              [
                77.5956929,
                12.9727728
              ],
              [
                77.595692,
                12.9729888
              ],
              [
                77.5955253,
                12.9729852
              ],
              [
                77.5955233,
                12.9727701
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-055",
        "properties": {
          "parcel_id": "P-055",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 424.6,
          "perimeter_m": 83.3,
          "confidence": 82.2,
          "confidence_tier": "Moderate",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.594776,
            12.973095
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 11.4,
            "impervious_surface_pct": 87.4
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5946958,
                12.9729896
              ],
              [
                77.5948573,
                12.9729859
              ],
              [
                77.5948604,
                12.9732025
              ],
              [
                77.594692,
                12.9732018
              ],
              [
                77.5946958,
                12.9729896
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-056",
        "properties": {
          "parcel_id": "P-056",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 434.1,
          "perimeter_m": 84.1,
          "confidence": 98.1,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.594942,
            12.973095
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 13.6,
            "impervious_surface_pct": 66.6
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5948592,
                12.9729905
              ],
              [
                77.5950246,
                12.9729905
              ],
              [
                77.5950281,
                12.9732034
              ],
              [
                77.5948566,
                12.9732069
              ],
              [
                77.5948592,
                12.9729905
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-057",
        "properties": {
          "parcel_id": "P-057",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 432.7,
          "perimeter_m": 84.2,
          "confidence": 92.7,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595108,
            12.973095
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 29.8,
            "impervious_surface_pct": 78.9
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5950269,
                12.9729839
              ],
              [
                77.5951905,
                12.9729859
              ],
              [
                77.595193,
                12.9732014
              ],
              [
                77.5950261,
                12.9732046
              ],
              [
                77.5950269,
                12.9729839
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-058",
        "properties": {
          "parcel_id": "P-058",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 437.3,
          "perimeter_m": 84.6,
          "confidence": 76.9,
          "confidence_tier": "Moderate",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595275,
            12.973095
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 24.2,
            "impervious_surface_pct": 90.4
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5951884,
                12.9729846
              ],
              [
                77.5953567,
                12.9729867
              ],
              [
                77.5953581,
                12.9732065
              ],
              [
                77.5951932,
                12.9732022
              ],
              [
                77.5951884,
                12.9729846
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-059",
        "properties": {
          "parcel_id": "P-059",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 438.5,
          "perimeter_m": 84.6,
          "confidence": 92.3,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595441,
            12.973095
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 21.1,
            "impervious_surface_pct": 69.4
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.595355,
                12.972987
              ],
              [
                77.595526,
                12.9729843
              ],
              [
                77.595525,
                12.9732004
              ],
              [
                77.5953584,
                12.9732036
              ],
              [
                77.595355,
                12.972987
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-060",
        "properties": {
          "parcel_id": "P-060",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 426.6,
          "perimeter_m": 83.6,
          "confidence": 91.8,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595608,
            12.973095
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 8.6,
            "impervious_surface_pct": 91.8
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955274,
                12.972987
              ],
              [
                77.595694,
                12.9729865
              ],
              [
                77.5956878,
                12.9732069
              ],
              [
                77.5955273,
                12.973201
              ],
              [
                77.5955274,
                12.972987
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-061",
        "properties": {
          "parcel_id": "P-061",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 444.4,
          "perimeter_m": 85.2,
          "confidence": 95.8,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.594776,
            12.973312
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 12.1,
            "impervious_surface_pct": 88.7
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5946945,
                12.973201
              ],
              [
                77.5948625,
                12.9732017
              ],
              [
                77.5948619,
                12.9734204
              ],
              [
                77.594693,
                12.9734218
              ],
              [
                77.5946945,
                12.973201
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-062",
        "properties": {
          "parcel_id": "P-062",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 411.4,
          "perimeter_m": 82.3,
          "confidence": 95.5,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": false,
          "topology_status": "Sliver Gap Anomaly",
          "centroid": [
            77.594942,
            12.973312
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 14.1,
            "impervious_surface_pct": 89.5
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5948592,
                12.9732049
              ],
              [
                77.5950167,
                12.9732045
              ],
              [
                77.5950187,
                12.97342
              ],
              [
                77.5948588,
                12.9734212
              ],
              [
                77.5948592,
                12.9732049
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-063",
        "properties": {
          "parcel_id": "P-063",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 401.1,
          "perimeter_m": 81.3,
          "confidence": 92.6,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": false,
          "topology_status": "Sliver Gap Anomaly",
          "centroid": [
            77.595108,
            12.973312
          ],
          "extracted_features": {
            "buildings_count": 0,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 21.4,
            "impervious_surface_pct": 70.0
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5950355,
                12.9732048
              ],
              [
                77.5951934,
                12.9732041
              ],
              [
                77.5951916,
                12.9734186
              ],
              [
                77.5950375,
                12.9734186
              ],
              [
                77.5950355,
                12.9732048
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-064",
        "properties": {
          "parcel_id": "P-064",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 422.9,
          "perimeter_m": 83.0,
          "confidence": 95.6,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595275,
            12.973312
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 17.4,
            "impervious_surface_pct": 87.7
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5951946,
                12.9732071
              ],
              [
                77.5953615,
                12.9732038
              ],
              [
                77.5953606,
                12.9734168
              ],
              [
                77.595194,
                12.9734166
              ],
              [
                77.5951946,
                12.9732071
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-065",
        "properties": {
          "parcel_id": "P-065",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 434.5,
          "perimeter_m": 84.2,
          "confidence": 95.6,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595441,
            12.973312
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 10.8,
            "impervious_surface_pct": 79.2
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5953565,
                12.9732036
              ],
              [
                77.595526,
                12.9732031
              ],
              [
                77.5955277,
                12.9734175
              ],
              [
                77.5953612,
                12.97342
              ],
              [
                77.5953565,
                12.9732036
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-066",
        "properties": {
          "parcel_id": "P-066",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 445.9,
          "perimeter_m": 85.3,
          "confidence": 93.4,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595608,
            12.973312
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 31.8,
            "impervious_surface_pct": 89.8
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955243,
                12.9732046
              ],
              [
                77.5956924,
                12.9732006
              ],
              [
                77.5956935,
                12.9734209
              ],
              [
                77.5955232,
                12.9734233
              ],
              [
                77.5955243,
                12.9732046
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-067",
        "properties": {
          "parcel_id": "P-067",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 431.1,
          "perimeter_m": 84.0,
          "confidence": 93.2,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.594776,
            12.973528
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 15.0,
            "impervious_surface_pct": 85.4
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5946948,
                12.9734221
              ],
              [
                77.594862,
                12.9734184
              ],
              [
                77.5948593,
                12.9736365
              ],
              [
                77.594695,
                12.9736373
              ],
              [
                77.5946948,
                12.9734221
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-068",
        "properties": {
          "parcel_id": "P-068",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 431.6,
          "perimeter_m": 84.0,
          "confidence": 93.8,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.594942,
            12.973528
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 21.7,
            "impervious_surface_pct": 78.8
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5948575,
                12.973417
              ],
              [
                77.5950216,
                12.9734184
              ],
              [
                77.5950242,
                12.9736344
              ],
              [
                77.5948561,
                12.9736338
              ],
              [
                77.5948575,
                12.973417
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-069",
        "properties": {
          "parcel_id": "P-069",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 436.3,
          "perimeter_m": 84.5,
          "confidence": 64.1,
          "confidence_tier": "Low (Needs Review)",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595108,
            12.973528
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 12.6,
            "impervious_surface_pct": 71.7
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5950228,
                12.9734182
              ],
              [
                77.59519,
                12.9734173
              ],
              [
                77.5951892,
                12.9736344
              ],
              [
                77.5950238,
                12.9736381
              ],
              [
                77.5950228,
                12.9734182
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-070",
        "properties": {
          "parcel_id": "P-070",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 427.8,
          "perimeter_m": 83.5,
          "confidence": 91.2,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595275,
            12.973528
          ],
          "extracted_features": {
            "buildings_count": 0,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 7.1,
            "impervious_surface_pct": 87.9
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.595192,
                12.9734211
              ],
              [
                77.5953585,
                12.9734231
              ],
              [
                77.5953578,
                12.9736375
              ],
              [
                77.5951912,
                12.9736345
              ],
              [
                77.595192,
                12.9734211
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-071",
        "properties": {
          "parcel_id": "P-071",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 420.8,
          "perimeter_m": 83.0,
          "confidence": 92.6,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595441,
            12.973528
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 34.7,
            "impervious_surface_pct": 77.9
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5953603,
                12.9734211
              ],
              [
                77.5955218,
                12.9734184
              ],
              [
                77.5955227,
                12.9736335
              ],
              [
                77.5953575,
                12.9736351
              ],
              [
                77.5953603,
                12.9734211
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-072",
        "properties": {
          "parcel_id": "P-072",
          "block": "Block C (Sector 4-C)",
          "area_sqm": 430.1,
          "perimeter_m": 83.7,
          "confidence": 95.0,
          "confidence_tier": "High",
          "verification_status": "Ground Verified",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595608,
            12.973528
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 27.4,
            "impervious_surface_pct": 80.1
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955281,
                12.9734211
              ],
              [
                77.5956902,
                12.9734216
              ],
              [
                77.5956943,
                12.9736355
              ],
              [
                77.5955209,
                12.9736343
              ],
              [
                77.5955281,
                12.9734211
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-073",
        "properties": {
          "parcel_id": "P-073",
          "block": "Block D (Sector 4-D)",
          "area_sqm": 440.2,
          "perimeter_m": 84.8,
          "confidence": 91.2,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595977,
            12.972879
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 5.9,
            "impervious_surface_pct": 81.6
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5958947,
                12.97277
              ],
              [
                77.5960602,
                12.9727709
              ],
              [
                77.5960629,
                12.9729883
              ],
              [
                77.595892,
                12.9729885
              ],
              [
                77.5958947,
                12.97277
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-074",
        "properties": {
          "parcel_id": "P-074",
          "block": "Block D (Sector 4-D)",
          "area_sqm": 432.5,
          "perimeter_m": 84.1,
          "confidence": 93.8,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.596144,
            12.972879
          ],
          "extracted_features": {
            "buildings_count": 0,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 29.0,
            "impervious_surface_pct": 89.8
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5960617,
                12.9727719
              ],
              [
                77.5962279,
                12.9727718
              ],
              [
                77.596226,
                12.9729899
              ],
              [
                77.5960616,
                12.9729896
              ],
              [
                77.5960617,
                12.9727719
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-075",
        "properties": {
          "parcel_id": "P-075",
          "block": "Block D (Sector 4-D)",
          "area_sqm": 427.9,
          "perimeter_m": 83.6,
          "confidence": 95.8,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.59631,
            12.972879
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 9.1,
            "impervious_surface_pct": 75.4
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5962278,
                12.9727724
              ],
              [
                77.5963921,
                12.9727693
              ],
              [
                77.5963907,
                12.9729865
              ],
              [
                77.5962245,
                12.9729866
              ],
              [
                77.5962278,
                12.9727724
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-076",
        "properties": {
          "parcel_id": "P-076",
          "block": "Block D (Sector 4-D)",
          "area_sqm": 422.8,
          "perimeter_m": 83.2,
          "confidence": 93.7,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.596477,
            12.972879
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 27.8,
            "impervious_surface_pct": 76.9
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5963955,
                12.9727711
              ],
              [
                77.59656,
                12.9727717
              ],
              [
                77.5965582,
                12.9729877
              ],
              [
                77.5963971,
                12.9729877
              ],
              [
                77.5963955,
                12.9727711
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-077",
        "properties": {
          "parcel_id": "P-077",
          "block": "Block D (Sector 4-D)",
          "area_sqm": 428.6,
          "perimeter_m": 83.8,
          "confidence": 94.2,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.596643,
            12.972879
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 13.4,
            "impervious_surface_pct": 79.5
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5965626,
                12.972772
              ],
              [
                77.5967258,
                12.972772
              ],
              [
                77.5967284,
                12.9729896
              ],
              [
                77.5965622,
                12.9729879
              ],
              [
                77.5965626,
                12.972772
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-078",
        "properties": {
          "parcel_id": "P-078",
          "block": "Block D (Sector 4-D)",
          "area_sqm": 432.3,
          "perimeter_m": 84.1,
          "confidence": 86.2,
          "confidence_tier": "Moderate",
          "verification_status": "Pending",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.59681,
            12.972879
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 28.9,
            "impervious_surface_pct": 75.7
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5967262,
                12.9727718
              ],
              [
                77.5968955,
                12.9727737
              ],
              [
                77.5968897,
                12.9729908
              ],
              [
                77.5967273,
                12.9729888
              ],
              [
                77.5967262,
                12.9727718
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-079",
        "properties": {
          "parcel_id": "P-079",
          "block": "Block D (Sector 4-D)",
          "area_sqm": 433.2,
          "perimeter_m": 84.1,
          "confidence": 95.9,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595977,
            12.973095
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 7.8,
            "impervious_surface_pct": 74.7
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5958906,
                12.9729907
              ],
              [
                77.5960585,
                12.9729887
              ],
              [
                77.596058,
                12.9732047
              ],
              [
                77.5958918,
                12.9732067
              ],
              [
                77.5958906,
                12.9729907
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-080",
        "properties": {
          "parcel_id": "P-080",
          "block": "Block D (Sector 4-D)",
          "area_sqm": 424.1,
          "perimeter_m": 83.4,
          "confidence": 97.0,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.596144,
            12.973095
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 30.8,
            "impervious_surface_pct": 67.3
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5960612,
                12.9729882
              ],
              [
                77.5962246,
                12.9729863
              ],
              [
                77.596225,
                12.9732054
              ],
              [
                77.5960638,
                12.9732044
              ],
              [
                77.5960612,
                12.9729882
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-081",
        "properties": {
          "parcel_id": "P-081",
          "block": "Block D (Sector 4-D)",
          "area_sqm": 437.7,
          "perimeter_m": 84.6,
          "confidence": 80.7,
          "confidence_tier": "Moderate",
          "verification_status": "Pending",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.59631,
            12.973095
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 20.0,
            "impervious_surface_pct": 81.0
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5962279,
                12.9729851
              ],
              [
                77.5963927,
                12.9729884
              ],
              [
                77.5963956,
                12.9732057
              ],
              [
                77.5962252,
                12.9732028
              ],
              [
                77.5962279,
                12.9729851
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-082",
        "properties": {
          "parcel_id": "P-082",
          "block": "Block D (Sector 4-D)",
          "area_sqm": 446.1,
          "perimeter_m": 85.3,
          "confidence": 91.0,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.596477,
            12.973095
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 24.2,
            "impervious_surface_pct": 79.5
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5963901,
                12.9729842
              ],
              [
                77.5965621,
                12.9729874
              ],
              [
                77.5965609,
                12.9732036
              ],
              [
                77.5963929,
                12.9732051
              ],
              [
                77.5963901,
                12.9729842
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-083",
        "properties": {
          "parcel_id": "P-083",
          "block": "Block D (Sector 4-D)",
          "area_sqm": 429.9,
          "perimeter_m": 83.8,
          "confidence": 95.9,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.596643,
            12.973095
          ],
          "extracted_features": {
            "buildings_count": 0,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 9.1,
            "impervious_surface_pct": 65.3
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5965569,
                12.9729869
              ],
              [
                77.596726,
                12.9729882
              ],
              [
                77.5967249,
                12.9732053
              ],
              [
                77.5965617,
                12.9732009
              ],
              [
                77.5965569,
                12.9729869
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-084",
        "properties": {
          "parcel_id": "P-084",
          "block": "Block D (Sector 4-D)",
          "area_sqm": 428.1,
          "perimeter_m": 83.7,
          "confidence": 97.7,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.59681,
            12.973095
          ],
          "extracted_features": {
            "buildings_count": 0,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 31.6,
            "impervious_surface_pct": 85.8
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5967263,
                12.9729863
              ],
              [
                77.5968929,
                12.9729897
              ],
              [
                77.596891,
                12.9732027
              ],
              [
                77.5967282,
                12.9732063
              ],
              [
                77.5967263,
                12.9729863
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-085",
        "properties": {
          "parcel_id": "P-085",
          "block": "Block D (Sector 4-D)",
          "area_sqm": 441.7,
          "perimeter_m": 84.8,
          "confidence": 94.8,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.595977,
            12.973312
          ],
          "extracted_features": {
            "buildings_count": 2,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 6.7,
            "impervious_surface_pct": 88.2
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5958908,
                12.9732058
              ],
              [
                77.596059,
                12.9732005
              ],
              [
                77.5960623,
                12.9734204
              ],
              [
                77.5958912,
                12.9734195
              ],
              [
                77.5958908,
                12.9732058
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-086",
        "properties": {
          "parcel_id": "P-086",
          "block": "Block D (Sector 4-D)",
          "area_sqm": 430.3,
          "perimeter_m": 83.9,
          "confidence": 96.1,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.596144,
            12.973312
          ],
          "extracted_features": {
            "buildings_count": 0,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 23.7,
            "impervious_surface_pct": 77.5
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5960634,
                12.9732056
              ],
              [
                77.5962257,
                12.9732006
              ],
              [
                77.5962268,
                12.9734189
              ],
              [
                77.5960592,
                12.9734219
              ],
              [
                77.5960634,
                12.9732056
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "P-087",
        "properties": {
          "parcel_id": "P-087",
          "block": "Block D (Sector 4-D)",
          "area_sqm": 440.6,
          "perimeter_m": 84.7,
          "confidence": 96.8,
          "confidence_tier": "High",
          "verification_status": "Pending",
          "geometry_valid": true,
          "topology_status": "Valid",
          "centroid": [
            77.59631,
            12.973312
          ],
          "extracted_features": {
            "buildings_count": 1,
            "road_access": "Direct Frontage",
            "vegetation_cover_pct": 5.7,
            "impervious_surface_pct": 79.6
          },
          "survey_metadata": {
            "gsd_cm": 5.0,
            "sensor": "Zenmuse P1 45MP Full-Frame",
            "flight_id": "UAV-BLR-SEC4-2026-08A",
            "crs": "EPSG:4326 / WGS 84 (UTM 43N Projected)",
            "legal_disclaimer": "Preliminary GIS boundary. Ownership is not determined by CadastraAI."
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5962278,
                12.9732036
              ],
              [
                77.5963955,
                12.9732014
              ],
              [
                77.5963965,
                12.9734217
              ],
              [
                77.5962252,
                12.9734163
              ],
              [
                77.5962278,
                12.9732036
              ]
            ]
          ]
        }
      }
    ]
  },
  "buildings": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "BLD-001",
        "properties": {
          "building_id": "BLD-001",
          "parent_parcel_id": "P-001",
          "footprint_area_sqm": 157.1,
          "perimeter_m": 50.5,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 7.9,
          "stories": 3,
          "extraction_confidence": 95.4
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.594716,
                12.9717338
              ],
              [
                77.5948191,
                12.9717335
              ],
              [
                77.5948179,
                12.9718614
              ],
              [
                77.5947157,
                12.9718608
              ],
              [
                77.594716,
                12.9717338
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-002",
        "properties": {
          "building_id": "BLD-002",
          "parent_parcel_id": "P-002",
          "footprint_area_sqm": 146.7,
          "perimeter_m": 48.9,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 6.1,
          "stories": 3,
          "extraction_confidence": 95.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5949093,
                12.9717128
              ],
              [
                77.5950056,
                12.9717125
              ],
              [
                77.5950064,
                12.9718374
              ],
              [
                77.5949079,
                12.9718388
              ],
              [
                77.5949093,
                12.9717128
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-003",
        "properties": {
          "building_id": "BLD-003",
          "parent_parcel_id": "P-004",
          "footprint_area_sqm": 188.2,
          "perimeter_m": 54.9,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 10.4,
          "stories": 3,
          "extraction_confidence": 96.7
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5952027,
                12.9717334
              ],
              [
                77.5953234,
                12.9717349
              ],
              [
                77.595324,
                12.9718638
              ],
              [
                77.5952022,
                12.9718631
              ],
              [
                77.5952027,
                12.9717334
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-004",
        "properties": {
          "building_id": "BLD-004",
          "parent_parcel_id": "P-005",
          "footprint_area_sqm": 142.8,
          "perimeter_m": 48.4,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 10.3,
          "stories": 4,
          "extraction_confidence": 92.1
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5954152,
                12.9717616
              ],
              [
                77.5955095,
                12.9717629
              ],
              [
                77.5955106,
                12.9718887
              ],
              [
                77.5954158,
                12.9718874
              ],
              [
                77.5954152,
                12.9717616
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-005",
        "properties": {
          "building_id": "BLD-005",
          "parent_parcel_id": "P-006",
          "footprint_area_sqm": 165.5,
          "perimeter_m": 52.0,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 6.0,
          "stories": 3,
          "extraction_confidence": 96.0
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955692,
                12.9717318
              ],
              [
                77.5956718,
                12.9717313
              ],
              [
                77.5956732,
                12.9718651
              ],
              [
                77.5955694,
                12.9718652
              ],
              [
                77.5955692,
                12.9717318
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-006",
        "properties": {
          "building_id": "BLD-006",
          "parent_parcel_id": "P-006",
          "footprint_area_sqm": 137.3,
          "perimeter_m": 46.9,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 13.0,
          "stories": 2,
          "extraction_confidence": 96.9
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955401,
                12.9717688
              ],
              [
                77.5956457,
                12.9717689
              ],
              [
                77.5956445,
                12.9718765
              ],
              [
                77.595539,
                12.9718779
              ],
              [
                77.5955401,
                12.9717688
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-007",
        "properties": {
          "building_id": "BLD-007",
          "parent_parcel_id": "P-007",
          "footprint_area_sqm": 158.4,
          "perimeter_m": 50.4,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 6.6,
          "stories": 3,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5947225,
                12.9719496
              ],
              [
                77.5948432,
                12.9719496
              ],
              [
                77.5948421,
                12.9720587
              ],
              [
                77.594721,
                12.9720588
              ],
              [
                77.5947225,
                12.9719496
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-008",
        "properties": {
          "building_id": "BLD-008",
          "parent_parcel_id": "P-008",
          "footprint_area_sqm": 191.8,
          "perimeter_m": 55.4,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 8.2,
          "stories": 4,
          "extraction_confidence": 93.4
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.594892,
                12.9719292
              ],
              [
                77.5950161,
                12.9719294
              ],
              [
                77.5950146,
                12.9720587
              ],
              [
                77.5948915,
                12.9720584
              ],
              [
                77.594892,
                12.9719292
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-009",
        "properties": {
          "building_id": "BLD-009",
          "parent_parcel_id": "P-008",
          "footprint_area_sqm": 139.5,
          "perimeter_m": 47.9,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 11.3,
          "stories": 2,
          "extraction_confidence": 95.7
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5948968,
                12.9719694
              ],
              [
                77.5949899,
                12.9719681
              ],
              [
                77.5949893,
                12.9720945
              ],
              [
                77.5948972,
                12.9720939
              ],
              [
                77.5948968,
                12.9719694
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-010",
        "properties": {
          "building_id": "BLD-010",
          "parent_parcel_id": "P-009",
          "footprint_area_sqm": 141.7,
          "perimeter_m": 47.6,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 10.8,
          "stories": 2,
          "extraction_confidence": 95.7
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5950465,
                12.9719561
              ],
              [
                77.595156,
                12.9719557
              ],
              [
                77.5951556,
                12.9720639
              ],
              [
                77.5950471,
                12.9720645
              ],
              [
                77.5950465,
                12.9719561
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-011",
        "properties": {
          "building_id": "BLD-011",
          "parent_parcel_id": "P-010",
          "footprint_area_sqm": 177.7,
          "perimeter_m": 53.4,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 6.6,
          "stories": 4,
          "extraction_confidence": 95.3
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5952282,
                12.9719554
              ],
              [
                77.5953447,
                12.971955
              ],
              [
                77.5953452,
                12.9720821
              ],
              [
                77.5952284,
                12.9720821
              ],
              [
                77.5952282,
                12.9719554
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-012",
        "properties": {
          "building_id": "BLD-012",
          "parent_parcel_id": "P-011",
          "footprint_area_sqm": 183.0,
          "perimeter_m": 54.7,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 8.7,
          "stories": 2,
          "extraction_confidence": 93.7
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5953892,
                12.9719622
              ],
              [
                77.5954967,
                12.9719618
              ],
              [
                77.5954974,
                12.9721032
              ],
              [
                77.5953888,
                12.9721029
              ],
              [
                77.5953892,
                12.9719622
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-013",
        "properties": {
          "building_id": "BLD-013",
          "parent_parcel_id": "P-012",
          "footprint_area_sqm": 146.0,
          "perimeter_m": 48.8,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 9.6,
          "stories": 4,
          "extraction_confidence": 97.8
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955754,
                12.9719575
              ],
              [
                77.5956739,
                12.9719566
              ],
              [
                77.5956725,
                12.972081
              ],
              [
                77.5955755,
                12.9720819
              ],
              [
                77.5955754,
                12.9719575
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-014",
        "properties": {
          "building_id": "BLD-014",
          "parent_parcel_id": "P-012",
          "footprint_area_sqm": 185.7,
          "perimeter_m": 54.5,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 10.1,
          "stories": 1,
          "extraction_confidence": 92.6
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955407,
                12.9719504
              ],
              [
                77.5956628,
                12.9719505
              ],
              [
                77.5956629,
                12.972078
              ],
              [
                77.5955418,
                12.9720773
              ],
              [
                77.5955407,
                12.9719504
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-015",
        "properties": {
          "building_id": "BLD-015",
          "parent_parcel_id": "P-013",
          "footprint_area_sqm": 132.5,
          "perimeter_m": 46.1,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 10.4,
          "stories": 2,
          "extraction_confidence": 92.9
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5947074,
                12.9721772
              ],
              [
                77.5948067,
                12.972178
              ],
              [
                77.5948067,
                12.9722892
              ],
              [
                77.5947074,
                12.9722882
              ],
              [
                77.5947074,
                12.9721772
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-016",
        "properties": {
          "building_id": "BLD-016",
          "parent_parcel_id": "P-013",
          "footprint_area_sqm": 176.3,
          "perimeter_m": 53.3,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 13.3,
          "stories": 4,
          "extraction_confidence": 96.9
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5947103,
                12.9721753
              ],
              [
                77.5948239,
                12.9721764
              ],
              [
                77.5948229,
                12.9723065
              ],
              [
                77.5947107,
                12.9723053
              ],
              [
                77.5947103,
                12.9721753
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-017",
        "properties": {
          "building_id": "BLD-017",
          "parent_parcel_id": "P-015",
          "footprint_area_sqm": 188.7,
          "perimeter_m": 55.4,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 7.6,
          "stories": 2,
          "extraction_confidence": 98.0
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5950592,
                12.9721584
              ],
              [
                77.5951711,
                12.9721581
              ],
              [
                77.5951716,
                12.9722978
              ],
              [
                77.5950587,
                12.9722983
              ],
              [
                77.5950592,
                12.9721584
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-018",
        "properties": {
          "building_id": "BLD-018",
          "parent_parcel_id": "P-016",
          "footprint_area_sqm": 143.2,
          "perimeter_m": 48.1,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 8.8,
          "stories": 1,
          "extraction_confidence": 92.7
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5952287,
                12.9721933
              ],
              [
                77.5953282,
                12.9721928
              ],
              [
                77.5953286,
                12.9723124
              ],
              [
                77.5952282,
                12.9723123
              ],
              [
                77.5952287,
                12.9721933
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-019",
        "properties": {
          "building_id": "BLD-019",
          "parent_parcel_id": "P-017",
          "footprint_area_sqm": 143.0,
          "perimeter_m": 48.0,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 13.8,
          "stories": 2,
          "extraction_confidence": 94.1
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5953995,
                12.9721619
              ],
              [
                77.5955011,
                12.9721606
              ],
              [
                77.5955012,
                12.9722778
              ],
              [
                77.5953992,
                12.9722787
              ],
              [
                77.5953995,
                12.9721619
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-020",
        "properties": {
          "building_id": "BLD-020",
          "parent_parcel_id": "P-017",
          "footprint_area_sqm": 149.8,
          "perimeter_m": 49.1,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 9.0,
          "stories": 3,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5953965,
                12.9721483
              ],
              [
                77.5955005,
                12.9721499
              ],
              [
                77.5955012,
                12.9722694
              ],
              [
                77.5953966,
                12.9722681
              ],
              [
                77.5953965,
                12.9721483
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-021",
        "properties": {
          "building_id": "BLD-021",
          "parent_parcel_id": "P-018",
          "footprint_area_sqm": 178.0,
          "perimeter_m": 54.4,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 9.9,
          "stories": 1,
          "extraction_confidence": 96.4
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955422,
                12.9721688
              ],
              [
                77.5956432,
                12.9721683
              ],
              [
                77.5956436,
                12.9723149
              ],
              [
                77.5955427,
                12.9723159
              ],
              [
                77.5955422,
                12.9721688
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-022",
        "properties": {
          "building_id": "BLD-022",
          "parent_parcel_id": "P-019",
          "footprint_area_sqm": 140.5,
          "perimeter_m": 47.4,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 9.7,
          "stories": 2,
          "extraction_confidence": 98.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5947152,
                12.9723775
              ],
              [
                77.5948212,
                12.9723778
              ],
              [
                77.5948222,
                12.9724878
              ],
              [
                77.5947151,
                12.9724871
              ],
              [
                77.5947152,
                12.9723775
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-023",
        "properties": {
          "building_id": "BLD-023",
          "parent_parcel_id": "P-021",
          "footprint_area_sqm": 195.5,
          "perimeter_m": 56.5,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 13.7,
          "stories": 3,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5950694,
                12.9723808
              ],
              [
                77.595181,
                12.9723816
              ],
              [
                77.5951808,
                12.9725275
              ],
              [
                77.5950693,
                12.9725269
              ],
              [
                77.5950694,
                12.9723808
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-024",
        "properties": {
          "building_id": "BLD-024",
          "parent_parcel_id": "P-022",
          "footprint_area_sqm": 135.1,
          "perimeter_m": 46.6,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 11.7,
          "stories": 2,
          "extraction_confidence": 93.9
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5952364,
                12.9724123
              ],
              [
                77.5953364,
                12.9724132
              ],
              [
                77.5953349,
                12.9725259
              ],
              [
                77.595236,
                12.9725258
              ],
              [
                77.5952364,
                12.9724123
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-025",
        "properties": {
          "building_id": "BLD-025",
          "parent_parcel_id": "P-022",
          "footprint_area_sqm": 137.1,
          "perimeter_m": 47.1,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 8.9,
          "stories": 1,
          "extraction_confidence": 96.7
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5952422,
                12.9723865
              ],
              [
                77.5953395,
                12.9723867
              ],
              [
                77.5953386,
                12.9725047
              ],
              [
                77.5952429,
                12.9725051
              ],
              [
                77.5952422,
                12.9723865
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-026",
        "properties": {
          "building_id": "BLD-026",
          "parent_parcel_id": "P-023",
          "footprint_area_sqm": 186.2,
          "perimeter_m": 55.2,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 12.7,
          "stories": 3,
          "extraction_confidence": 95.9
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5954003,
                12.9723656
              ],
              [
                77.595509,
                12.9723658
              ],
              [
                77.5955088,
                12.9725077
              ],
              [
                77.5953994,
                12.9725082
              ],
              [
                77.5954003,
                12.9723656
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-027",
        "properties": {
          "building_id": "BLD-027",
          "parent_parcel_id": "P-024",
          "footprint_area_sqm": 154.1,
          "perimeter_m": 50.0,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 12.8,
          "stories": 3,
          "extraction_confidence": 92.7
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955735,
                12.9723777
              ],
              [
                77.595675,
                12.9723766
              ],
              [
                77.5956756,
                12.972503
              ],
              [
                77.5955734,
                12.9725034
              ],
              [
                77.5955735,
                12.9723777
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-028",
        "properties": {
          "building_id": "BLD-028",
          "parent_parcel_id": "P-025",
          "footprint_area_sqm": 202.3,
          "perimeter_m": 57.1,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 11.6,
          "stories": 3,
          "extraction_confidence": 99.0
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5959273,
                12.9717226
              ],
              [
                77.5960479,
                12.9717228
              ],
              [
                77.5960466,
                12.9718627
              ],
              [
                77.5959278,
                12.9718642
              ],
              [
                77.5959273,
                12.9717226
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-029",
        "properties": {
          "building_id": "BLD-029",
          "parent_parcel_id": "P-025",
          "footprint_area_sqm": 191.3,
          "perimeter_m": 55.5,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 6.1,
          "stories": 1,
          "extraction_confidence": 96.4
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5959068,
                12.9717134
              ],
              [
                77.5960237,
                12.9717135
              ],
              [
                77.5960238,
                12.9718497
              ],
              [
                77.5959067,
                12.9718496
              ],
              [
                77.5959068,
                12.9717134
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-030",
        "properties": {
          "building_id": "BLD-030",
          "parent_parcel_id": "P-026",
          "footprint_area_sqm": 144.1,
          "perimeter_m": 48.5,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 10.0,
          "stories": 2,
          "extraction_confidence": 92.2
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5960893,
                12.9717402
              ],
              [
                77.5961854,
                12.9717409
              ],
              [
                77.5961853,
                12.9718654
              ],
              [
                77.596089,
                12.9718652
              ],
              [
                77.5960893,
                12.9717402
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-031",
        "properties": {
          "building_id": "BLD-031",
          "parent_parcel_id": "P-027",
          "footprint_area_sqm": 166.1,
          "perimeter_m": 51.6,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 10.0,
          "stories": 2,
          "extraction_confidence": 92.6
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5962427,
                12.9717255
              ],
              [
                77.5963608,
                12.9717243
              ],
              [
                77.5963597,
                12.9718418
              ],
              [
                77.5962414,
                12.9718421
              ],
              [
                77.5962427,
                12.9717255
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-032",
        "properties": {
          "building_id": "BLD-032",
          "parent_parcel_id": "P-027",
          "footprint_area_sqm": 165.7,
          "perimeter_m": 52.2,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 11.6,
          "stories": 2,
          "extraction_confidence": 97.8
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.596247,
                12.971713
              ],
              [
                77.5963484,
                12.9717129
              ],
              [
                77.5963489,
                12.9718489
              ],
              [
                77.5962476,
                12.9718493
              ],
              [
                77.596247,
                12.971713
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-033",
        "properties": {
          "building_id": "BLD-033",
          "parent_parcel_id": "P-028",
          "footprint_area_sqm": 142.5,
          "perimeter_m": 48.5,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 13.2,
          "stories": 2,
          "extraction_confidence": 96.7
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.596429,
                12.9717429
              ],
              [
                77.5965213,
                12.9717435
              ],
              [
                77.59652,
                12.9718713
              ],
              [
                77.5964278,
                12.9718724
              ],
              [
                77.596429,
                12.9717429
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-034",
        "properties": {
          "building_id": "BLD-034",
          "parent_parcel_id": "P-028",
          "footprint_area_sqm": 169.4,
          "perimeter_m": 52.2,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 10.9,
          "stories": 4,
          "extraction_confidence": 95.0
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5964262,
                12.9717424
              ],
              [
                77.5965387,
                12.9717441
              ],
              [
                77.5965388,
                12.9718689
              ],
              [
                77.5964269,
                12.9718691
              ],
              [
                77.5964262,
                12.9717424
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-035",
        "properties": {
          "building_id": "BLD-035",
          "parent_parcel_id": "P-029",
          "footprint_area_sqm": 144.9,
          "perimeter_m": 48.5,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 10.6,
          "stories": 4,
          "extraction_confidence": 99.0
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5966135,
                12.9717299
              ],
              [
                77.5967113,
                12.9717292
              ],
              [
                77.596713,
                12.9718526
              ],
              [
                77.5966134,
                12.9718511
              ],
              [
                77.5966135,
                12.9717299
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-036",
        "properties": {
          "building_id": "BLD-036",
          "parent_parcel_id": "P-029",
          "footprint_area_sqm": 135.7,
          "perimeter_m": 47.0,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 7.1,
          "stories": 2,
          "extraction_confidence": 99.1
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5966174,
                12.9717546
              ],
              [
                77.5967113,
                12.9717542
              ],
              [
                77.5967118,
                12.9718746
              ],
              [
                77.5966185,
                12.9718756
              ],
              [
                77.5966174,
                12.9717546
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-037",
        "properties": {
          "building_id": "BLD-037",
          "parent_parcel_id": "P-030",
          "footprint_area_sqm": 178.5,
          "perimeter_m": 53.6,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 8.9,
          "stories": 1,
          "extraction_confidence": 92.4
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5967593,
                12.9717327
              ],
              [
                77.5968743,
                12.9717327
              ],
              [
                77.5968759,
                12.9718604
              ],
              [
                77.5967594,
                12.9718619
              ],
              [
                77.5967593,
                12.9717327
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-038",
        "properties": {
          "building_id": "BLD-038",
          "parent_parcel_id": "P-031",
          "footprint_area_sqm": 179.9,
          "perimeter_m": 54.0,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 8.6,
          "stories": 2,
          "extraction_confidence": 95.0
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5959177,
                12.9719512
              ],
              [
                77.5960289,
                12.9719517
              ],
              [
                77.5960283,
                12.9720873
              ],
              [
                77.5959187,
                12.9720871
              ],
              [
                77.5959177,
                12.9719512
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-039",
        "properties": {
          "building_id": "BLD-039",
          "parent_parcel_id": "P-032",
          "footprint_area_sqm": 126.5,
          "perimeter_m": 45.2,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 13.7,
          "stories": 4,
          "extraction_confidence": 94.2
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.596107,
                12.9719782
              ],
              [
                77.5962016,
                12.9719777
              ],
              [
                77.5962008,
                12.9720896
              ],
              [
                77.5961072,
                12.9720903
              ],
              [
                77.596107,
                12.9719782
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-040",
        "properties": {
          "building_id": "BLD-040",
          "parent_parcel_id": "P-033",
          "footprint_area_sqm": 209.1,
          "perimeter_m": 58.2,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 7.8,
          "stories": 2,
          "extraction_confidence": 98.3
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5962597,
                12.9719453
              ],
              [
                77.5963799,
                12.9719468
              ],
              [
                77.5963786,
                12.9720916
              ],
              [
                77.5962598,
                12.9720919
              ],
              [
                77.5962597,
                12.9719453
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-041",
        "properties": {
          "building_id": "BLD-041",
          "parent_parcel_id": "P-033",
          "footprint_area_sqm": 163.7,
          "perimeter_m": 51.3,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 12.9,
          "stories": 2,
          "extraction_confidence": 93.1
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5962422,
                12.9719604
              ],
              [
                77.5963529,
                12.9719598
              ],
              [
                77.5963532,
                12.9720834
              ],
              [
                77.5962435,
                12.9720842
              ],
              [
                77.5962422,
                12.9719604
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-042",
        "properties": {
          "building_id": "BLD-042",
          "parent_parcel_id": "P-034",
          "footprint_area_sqm": 179.6,
          "perimeter_m": 53.8,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 4.6,
          "stories": 3,
          "extraction_confidence": 93.3
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.59642,
                12.9719399
              ],
              [
                77.5965338,
                12.9719385
              ],
              [
                77.5965354,
                12.9720707
              ],
              [
                77.596421,
                12.9720699
              ],
              [
                77.59642,
                12.9719399
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-043",
        "properties": {
          "building_id": "BLD-043",
          "parent_parcel_id": "P-035",
          "footprint_area_sqm": 154.3,
          "perimeter_m": 50.0,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 12.5,
          "stories": 2,
          "extraction_confidence": 95.1
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5965881,
                12.9719595
              ],
              [
                77.5966913,
                12.9719591
              ],
              [
                77.5966912,
                12.9720844
              ],
              [
                77.5965888,
                12.9720843
              ],
              [
                77.5965881,
                12.9719595
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-044",
        "properties": {
          "building_id": "BLD-044",
          "parent_parcel_id": "P-036",
          "footprint_area_sqm": 170.5,
          "perimeter_m": 52.8,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 8.9,
          "stories": 4,
          "extraction_confidence": 97.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5967696,
                12.9719607
              ],
              [
                77.5968727,
                12.9719615
              ],
              [
                77.5968737,
                12.972098
              ],
              [
                77.5967695,
                12.9720982
              ],
              [
                77.5967696,
                12.9719607
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-045",
        "properties": {
          "building_id": "BLD-045",
          "parent_parcel_id": "P-036",
          "footprint_area_sqm": 183.4,
          "perimeter_m": 54.9,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 7.8,
          "stories": 1,
          "extraction_confidence": 94.2
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5967589,
                12.9719489
              ],
              [
                77.5968653,
                12.9719476
              ],
              [
                77.5968643,
                12.9720922
              ],
              [
                77.5967583,
                12.9720919
              ],
              [
                77.5967589,
                12.9719489
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-046",
        "properties": {
          "building_id": "BLD-046",
          "parent_parcel_id": "P-037",
          "footprint_area_sqm": 153.1,
          "perimeter_m": 49.5,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 9.3,
          "stories": 2,
          "extraction_confidence": 92.3
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5959312,
                12.9721805
              ],
              [
                77.5960479,
                12.9721812
              ],
              [
                77.5960478,
                12.9722906
              ],
              [
                77.5959324,
                12.9722909
              ],
              [
                77.5959312,
                12.9721805
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-047",
        "properties": {
          "building_id": "BLD-047",
          "parent_parcel_id": "P-039",
          "footprint_area_sqm": 141.3,
          "perimeter_m": 48.0,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 10.6,
          "stories": 3,
          "extraction_confidence": 95.7
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5962817,
                12.9721812
              ],
              [
                77.5963789,
                12.9721807
              ],
              [
                77.5963779,
                12.9723033
              ],
              [
                77.5962825,
                12.9723031
              ],
              [
                77.5962817,
                12.9721812
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-048",
        "properties": {
          "building_id": "BLD-048",
          "parent_parcel_id": "P-040",
          "footprint_area_sqm": 197.2,
          "perimeter_m": 56.5,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 11.4,
          "stories": 1,
          "extraction_confidence": 95.0
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5964292,
                12.9721398
              ],
              [
                77.596546,
                12.9721391
              ],
              [
                77.596546,
                12.9722806
              ],
              [
                77.59643,
                12.9722805
              ],
              [
                77.5964292,
                12.9721398
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-049",
        "properties": {
          "building_id": "BLD-049",
          "parent_parcel_id": "P-040",
          "footprint_area_sqm": 160.4,
          "perimeter_m": 50.7,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 8.9,
          "stories": 2,
          "extraction_confidence": 97.6
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5964184,
                12.9721591
              ],
              [
                77.596532,
                12.9721589
              ],
              [
                77.5965326,
                12.9722765
              ],
              [
                77.5964186,
                12.9722763
              ],
              [
                77.5964184,
                12.9721591
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-050",
        "properties": {
          "building_id": "BLD-050",
          "parent_parcel_id": "P-041",
          "footprint_area_sqm": 202.6,
          "perimeter_m": 57.2,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 8.4,
          "stories": 3,
          "extraction_confidence": 95.6
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5965768,
                12.9721726
              ],
              [
                77.5966963,
                12.9721717
              ],
              [
                77.5966978,
                12.9723126
              ],
              [
                77.5965772,
                12.9723128
              ],
              [
                77.5965768,
                12.9721726
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-051",
        "properties": {
          "building_id": "BLD-051",
          "parent_parcel_id": "P-041",
          "footprint_area_sqm": 172.9,
          "perimeter_m": 53.8,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 11.7,
          "stories": 3,
          "extraction_confidence": 95.2
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5965892,
                12.9721382
              ],
              [
                77.5966881,
                12.9721381
              ],
              [
                77.5966871,
                12.972284
              ],
              [
                77.596589,
                12.9722847
              ],
              [
                77.5965892,
                12.9721382
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-052",
        "properties": {
          "building_id": "BLD-052",
          "parent_parcel_id": "P-042",
          "footprint_area_sqm": 158.3,
          "perimeter_m": 51.0,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 6.8,
          "stories": 3,
          "extraction_confidence": 93.3
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5967654,
                12.9721423
              ],
              [
                77.5968643,
                12.9721425
              ],
              [
                77.5968643,
                12.9722757
              ],
              [
                77.5967644,
                12.9722744
              ],
              [
                77.5967654,
                12.9721423
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-053",
        "properties": {
          "building_id": "BLD-053",
          "parent_parcel_id": "P-042",
          "footprint_area_sqm": 175.6,
          "perimeter_m": 53.1,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 7.9,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5967483,
                12.9721908
              ],
              [
                77.596862,
                12.9721894
              ],
              [
                77.5968627,
                12.9723179
              ],
              [
                77.596748,
                12.9723185
              ],
              [
                77.5967483,
                12.9721908
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-054",
        "properties": {
          "building_id": "BLD-054",
          "parent_parcel_id": "P-043",
          "footprint_area_sqm": 188.8,
          "perimeter_m": 55.0,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 13.9,
          "stories": 4,
          "extraction_confidence": 95.4
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5959078,
                12.9723647
              ],
              [
                77.5960307,
                12.9723633
              ],
              [
                77.5960321,
                12.9724913
              ],
              [
                77.595907,
                12.9724903
              ],
              [
                77.5959078,
                12.9723647
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-055",
        "properties": {
          "building_id": "BLD-055",
          "parent_parcel_id": "P-044",
          "footprint_area_sqm": 178.5,
          "perimeter_m": 53.4,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 7.6,
          "stories": 1,
          "extraction_confidence": 94.4
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5960961,
                12.9723858
              ],
              [
                77.5962174,
                12.9723856
              ],
              [
                77.5962178,
                12.9725075
              ],
              [
                77.5960963,
                12.9725088
              ],
              [
                77.5960961,
                12.9723858
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-056",
        "properties": {
          "building_id": "BLD-056",
          "parent_parcel_id": "P-045",
          "footprint_area_sqm": 214.0,
          "perimeter_m": 58.8,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 6.7,
          "stories": 2,
          "extraction_confidence": 94.6
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5962372,
                12.9723808
              ],
              [
                77.5963619,
                12.972381
              ],
              [
                77.5963609,
                12.9725254
              ],
              [
                77.596238,
                12.9725244
              ],
              [
                77.5962372,
                12.9723808
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-057",
        "properties": {
          "building_id": "BLD-057",
          "parent_parcel_id": "P-045",
          "footprint_area_sqm": 162.4,
          "perimeter_m": 51.0,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 11.5,
          "stories": 3,
          "extraction_confidence": 95.7
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5962395,
                12.9723889
              ],
              [
                77.5963621,
                12.9723883
              ],
              [
                77.5963626,
                12.972498
              ],
              [
                77.5962393,
                12.9724992
              ],
              [
                77.5962395,
                12.9723889
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-058",
        "properties": {
          "building_id": "BLD-058",
          "parent_parcel_id": "P-046",
          "footprint_area_sqm": 181.4,
          "perimeter_m": 54.6,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 12.0,
          "stories": 4,
          "extraction_confidence": 93.6
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5964218,
                12.9723578
              ],
              [
                77.5965277,
                12.9723569
              ],
              [
                77.5965272,
                12.9725004
              ],
              [
                77.5964222,
                12.9725009
              ],
              [
                77.5964218,
                12.9723578
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-059",
        "properties": {
          "building_id": "BLD-059",
          "parent_parcel_id": "P-047",
          "footprint_area_sqm": 177.4,
          "perimeter_m": 54.3,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 11.8,
          "stories": 2,
          "extraction_confidence": 95.1
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5966012,
                12.972375
              ],
              [
                77.5967017,
                12.9723753
              ],
              [
                77.5967028,
                12.9725213
              ],
              [
                77.596601,
                12.9725211
              ],
              [
                77.5966012,
                12.972375
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-060",
        "properties": {
          "building_id": "BLD-060",
          "parent_parcel_id": "P-048",
          "footprint_area_sqm": 160.2,
          "perimeter_m": 51.2,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 12.5,
          "stories": 4,
          "extraction_confidence": 92.3
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5967613,
                12.9723617
              ],
              [
                77.5968615,
                12.9723611
              ],
              [
                77.5968623,
                12.9724939
              ],
              [
                77.5967619,
                12.9724949
              ],
              [
                77.5967613,
                12.9723617
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-061",
        "properties": {
          "building_id": "BLD-061",
          "parent_parcel_id": "P-048",
          "footprint_area_sqm": 161.2,
          "perimeter_m": 50.8,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 9.1,
          "stories": 3,
          "extraction_confidence": 94.1
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5967614,
                12.9724078
              ],
              [
                77.5968822,
                12.9724085
              ],
              [
                77.5968812,
                12.9725202
              ],
              [
                77.5967619,
                12.9725198
              ],
              [
                77.5967614,
                12.9724078
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-062",
        "properties": {
          "building_id": "BLD-062",
          "parent_parcel_id": "P-050",
          "footprint_area_sqm": 157.7,
          "perimeter_m": 50.3,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 5.4,
          "stories": 3,
          "extraction_confidence": 95.6
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5948977,
                12.9728004
              ],
              [
                77.5950096,
                12.9728008
              ],
              [
                77.59501,
                12.9729181
              ],
              [
                77.594898,
                12.9729177
              ],
              [
                77.5948977,
                12.9728004
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-063",
        "properties": {
          "building_id": "BLD-063",
          "parent_parcel_id": "P-051",
          "footprint_area_sqm": 137.4,
          "perimeter_m": 47.2,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 5.7,
          "stories": 1,
          "extraction_confidence": 94.8
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.595054,
                12.9728136
              ],
              [
                77.5951509,
                12.9728142
              ],
              [
                77.5951504,
                12.9729326
              ],
              [
                77.5950547,
                12.9729329
              ],
              [
                77.595054,
                12.9728136
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-064",
        "properties": {
          "building_id": "BLD-064",
          "parent_parcel_id": "P-051",
          "footprint_area_sqm": 172.1,
          "perimeter_m": 52.5,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 7.6,
          "stories": 4,
          "extraction_confidence": 94.3
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5950617,
                12.9728332
              ],
              [
                77.5951802,
                12.9728323
              ],
              [
                77.5951795,
                12.9729542
              ],
              [
                77.5950622,
                12.9729544
              ],
              [
                77.5950617,
                12.9728332
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-065",
        "properties": {
          "building_id": "BLD-065",
          "parent_parcel_id": "P-052",
          "footprint_area_sqm": 199.5,
          "perimeter_m": 57.1,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 10.0,
          "stories": 2,
          "extraction_confidence": 95.8
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.595221,
                12.972819
              ],
              [
                77.5953336,
                12.9728186
              ],
              [
                77.5953354,
                12.9729654
              ],
              [
                77.595221,
                12.972965
              ],
              [
                77.595221,
                12.972819
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-066",
        "properties": {
          "building_id": "BLD-066",
          "parent_parcel_id": "P-053",
          "footprint_area_sqm": 168.9,
          "perimeter_m": 52.1,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 13.6,
          "stories": 3,
          "extraction_confidence": 98.6
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5953933,
                12.9728409
              ],
              [
                77.5955063,
                12.9728398
              ],
              [
                77.5955066,
                12.9729643
              ],
              [
                77.5953929,
                12.9729646
              ],
              [
                77.5953933,
                12.9728409
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-067",
        "properties": {
          "building_id": "BLD-067",
          "parent_parcel_id": "P-054",
          "footprint_area_sqm": 216.9,
          "perimeter_m": 59.2,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 13.0,
          "stories": 3,
          "extraction_confidence": 97.9
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955537,
                12.9728147
              ],
              [
                77.5956762,
                12.9728148
              ],
              [
                77.595677,
                12.9729614
              ],
              [
                77.595553,
                12.9729612
              ],
              [
                77.5955537,
                12.9728147
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-068",
        "properties": {
          "building_id": "BLD-068",
          "parent_parcel_id": "P-055",
          "footprint_area_sqm": 155.6,
          "perimeter_m": 50.4,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 5.5,
          "stories": 2,
          "extraction_confidence": 92.0
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5947168,
                12.9730098
              ],
              [
                77.5948161,
                12.973011
              ],
              [
                77.5948164,
                12.9731398
              ],
              [
                77.5947156,
                12.97314
              ],
              [
                77.5947168,
                12.9730098
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-069",
        "properties": {
          "building_id": "BLD-069",
          "parent_parcel_id": "P-056",
          "footprint_area_sqm": 190.8,
          "perimeter_m": 55.4,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 6.3,
          "stories": 2,
          "extraction_confidence": 98.3
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5948762,
                12.9730398
              ],
              [
                77.5949935,
                12.9730404
              ],
              [
                77.5949933,
                12.9731749
              ],
              [
                77.5948747,
                12.9731747
              ],
              [
                77.5948762,
                12.9730398
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-070",
        "properties": {
          "building_id": "BLD-070",
          "parent_parcel_id": "P-056",
          "footprint_area_sqm": 144.2,
          "perimeter_m": 48.8,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 7.6,
          "stories": 3,
          "extraction_confidence": 96.7
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5948782,
                12.9730562
              ],
              [
                77.5949705,
                12.9730553
              ],
              [
                77.5949712,
                12.9731862
              ],
              [
                77.5948785,
                12.973185
              ],
              [
                77.5948782,
                12.9730562
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-071",
        "properties": {
          "building_id": "BLD-071",
          "parent_parcel_id": "P-057",
          "footprint_area_sqm": 153.9,
          "perimeter_m": 50.5,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 7.0,
          "stories": 2,
          "extraction_confidence": 97.0
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5950473,
                12.9730103
              ],
              [
                77.5951416,
                12.9730102
              ],
              [
                77.5951425,
                12.9731457
              ],
              [
                77.5950473,
                12.9731453
              ],
              [
                77.5950473,
                12.9730103
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-072",
        "properties": {
          "building_id": "BLD-072",
          "parent_parcel_id": "P-058",
          "footprint_area_sqm": 145.2,
          "perimeter_m": 48.3,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 11.0,
          "stories": 4,
          "extraction_confidence": 98.3
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5952401,
                12.9730367
              ],
              [
                77.5953437,
                12.9730362
              ],
              [
                77.5953447,
                12.973153
              ],
              [
                77.5952408,
                12.9731531
              ],
              [
                77.5952401,
                12.9730367
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-073",
        "properties": {
          "building_id": "BLD-073",
          "parent_parcel_id": "P-059",
          "footprint_area_sqm": 179.9,
          "perimeter_m": 53.7,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 11.4,
          "stories": 3,
          "extraction_confidence": 93.8
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5953863,
                12.9730454
              ],
              [
                77.5955062,
                12.9730439
              ],
              [
                77.5955056,
                12.9731698
              ],
              [
                77.5953864,
                12.9731701
              ],
              [
                77.5953863,
                12.9730454
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-074",
        "properties": {
          "building_id": "BLD-074",
          "parent_parcel_id": "P-059",
          "footprint_area_sqm": 127.5,
          "perimeter_m": 45.6,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 11.8,
          "stories": 3,
          "extraction_confidence": 94.7
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5953767,
                12.9730327
              ],
              [
                77.5954671,
                12.9730334
              ],
              [
                77.5954688,
                12.9731492
              ],
              [
                77.5953759,
                12.9731487
              ],
              [
                77.5953767,
                12.9730327
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-075",
        "properties": {
          "building_id": "BLD-075",
          "parent_parcel_id": "P-060",
          "footprint_area_sqm": 141.0,
          "perimeter_m": 47.5,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 7.1,
          "stories": 1,
          "extraction_confidence": 92.2
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955736,
                12.9730605
              ],
              [
                77.5956777,
                12.9730601
              ],
              [
                77.5956776,
                12.9731725
              ],
              [
                77.5955726,
                12.9731727
              ],
              [
                77.5955736,
                12.9730605
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-076",
        "properties": {
          "building_id": "BLD-076",
          "parent_parcel_id": "P-060",
          "footprint_area_sqm": 181.6,
          "perimeter_m": 54.1,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 6.7,
          "stories": 2,
          "extraction_confidence": 97.4
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955643,
                12.9730483
              ],
              [
                77.5956785,
                12.973049
              ],
              [
                77.5956786,
                12.9731818
              ],
              [
                77.5955643,
                12.9731803
              ],
              [
                77.5955643,
                12.9730483
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-077",
        "properties": {
          "building_id": "BLD-077",
          "parent_parcel_id": "P-061",
          "footprint_area_sqm": 193.1,
          "perimeter_m": 55.6,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 12.0,
          "stories": 2,
          "extraction_confidence": 97.0
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5947114,
                12.9732358
              ],
              [
                77.5948361,
                12.9732351
              ],
              [
                77.594836,
                12.9733642
              ],
              [
                77.5947105,
                12.9733638
              ],
              [
                77.5947114,
                12.9732358
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-078",
        "properties": {
          "building_id": "BLD-078",
          "parent_parcel_id": "P-061",
          "footprint_area_sqm": 152.1,
          "perimeter_m": 49.5,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 8.2,
          "stories": 2,
          "extraction_confidence": 93.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.594711,
                12.9732535
              ],
              [
                77.5948172,
                12.9732534
              ],
              [
                77.5948165,
                12.973373
              ],
              [
                77.5947113,
                12.9733736
              ],
              [
                77.594711,
                12.9732535
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-079",
        "properties": {
          "building_id": "BLD-079",
          "parent_parcel_id": "P-062",
          "footprint_area_sqm": 135.5,
          "perimeter_m": 46.8,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 9.6,
          "stories": 2,
          "extraction_confidence": 94.2
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5949031,
                12.9732696
              ],
              [
                77.5950015,
                12.9732692
              ],
              [
                77.595001,
                12.9733839
              ],
              [
                77.5949023,
                12.973384
              ],
              [
                77.5949031,
                12.9732696
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-080",
        "properties": {
          "building_id": "BLD-080",
          "parent_parcel_id": "P-062",
          "footprint_area_sqm": 175.4,
          "perimeter_m": 53.8,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 7.0,
          "stories": 4,
          "extraction_confidence": 96.2
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5948894,
                12.9732543
              ],
              [
                77.5949922,
                12.9732533
              ],
              [
                77.5949922,
                12.9733955
              ],
              [
                77.5948897,
                12.9733968
              ],
              [
                77.5948894,
                12.9732543
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-081",
        "properties": {
          "building_id": "BLD-081",
          "parent_parcel_id": "P-064",
          "footprint_area_sqm": 162.5,
          "perimeter_m": 51.7,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 4.7,
          "stories": 2,
          "extraction_confidence": 95.9
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5952052,
                12.9732444
              ],
              [
                77.595305,
                12.9732444
              ],
              [
                77.5953047,
                12.9733798
              ],
              [
                77.5952046,
                12.9733799
              ],
              [
                77.5952052,
                12.9732444
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-082",
        "properties": {
          "building_id": "BLD-082",
          "parent_parcel_id": "P-065",
          "footprint_area_sqm": 171.0,
          "perimeter_m": 52.3,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 5.4,
          "stories": 3,
          "extraction_confidence": 94.7
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5953788,
                12.9732451
              ],
              [
                77.5954986,
                12.9732445
              ],
              [
                77.595498,
                12.9733642
              ],
              [
                77.5953793,
                12.9733642
              ],
              [
                77.5953788,
                12.9732451
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-083",
        "properties": {
          "building_id": "BLD-083",
          "parent_parcel_id": "P-066",
          "footprint_area_sqm": 172.1,
          "perimeter_m": 53.5,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 13.6,
          "stories": 4,
          "extraction_confidence": 93.0
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955654,
                12.9732438
              ],
              [
                77.5956654,
                12.9732427
              ],
              [
                77.5956651,
                12.9733865
              ],
              [
                77.5955653,
                12.9733869
              ],
              [
                77.5955654,
                12.9732438
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-084",
        "properties": {
          "building_id": "BLD-084",
          "parent_parcel_id": "P-067",
          "footprint_area_sqm": 167.7,
          "perimeter_m": 53.2,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 4.8,
          "stories": 2,
          "extraction_confidence": 97.6
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5947379,
                12.9734539
              ],
              [
                77.5948331,
                12.9734553
              ],
              [
                77.5948329,
                12.9736017
              ],
              [
                77.5947378,
                12.9736011
              ],
              [
                77.5947379,
                12.9734539
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-085",
        "properties": {
          "building_id": "BLD-085",
          "parent_parcel_id": "P-067",
          "footprint_area_sqm": 149.1,
          "perimeter_m": 48.9,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 11.3,
          "stories": 2,
          "extraction_confidence": 97.3
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5947237,
                12.9734622
              ],
              [
                77.5948306,
                12.9734625
              ],
              [
                77.5948304,
                12.9735785
              ],
              [
                77.5947235,
                12.9735786
              ],
              [
                77.5947237,
                12.9734622
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-086",
        "properties": {
          "building_id": "BLD-086",
          "parent_parcel_id": "P-068",
          "footprint_area_sqm": 127.0,
          "perimeter_m": 45.3,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 9.9,
          "stories": 2,
          "extraction_confidence": 96.9
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5948974,
                12.9734789
              ],
              [
                77.594991,
                12.9734781
              ],
              [
                77.5949924,
                12.9735902
              ],
              [
                77.594897,
                12.9735907
              ],
              [
                77.5948974,
                12.9734789
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-087",
        "properties": {
          "building_id": "BLD-087",
          "parent_parcel_id": "P-069",
          "footprint_area_sqm": 177.1,
          "perimeter_m": 53.4,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 7.4,
          "stories": 4,
          "extraction_confidence": 98.8
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5950421,
                12.9734431
              ],
              [
                77.5951544,
                12.9734425
              ],
              [
                77.5951553,
                12.9735732
              ],
              [
                77.5950421,
                12.9735741
              ],
              [
                77.5950421,
                12.9734431
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-088",
        "properties": {
          "building_id": "BLD-088",
          "parent_parcel_id": "P-069",
          "footprint_area_sqm": 140.8,
          "perimeter_m": 47.8,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 13.4,
          "stories": 2,
          "extraction_confidence": 96.3
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.595078,
                12.9734951
              ],
              [
                77.5951766,
                12.9734949
              ],
              [
                77.5951761,
                12.9736148
              ],
              [
                77.595079,
                12.9736149
              ],
              [
                77.595078,
                12.9734951
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-089",
        "properties": {
          "building_id": "BLD-089",
          "parent_parcel_id": "P-071",
          "footprint_area_sqm": 161.0,
          "perimeter_m": 51.1,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 6.1,
          "stories": 4,
          "extraction_confidence": 92.3
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5954045,
                12.9734747
              ],
              [
                77.595509,
                12.9734749
              ],
              [
                77.5955093,
                12.9736023
              ],
              [
                77.5954036,
                12.9736025
              ],
              [
                77.5954045,
                12.9734747
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-090",
        "properties": {
          "building_id": "BLD-090",
          "parent_parcel_id": "P-072",
          "footprint_area_sqm": 157.4,
          "perimeter_m": 50.2,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 7.8,
          "stories": 2,
          "extraction_confidence": 95.3
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955469,
                12.9734677
              ],
              [
                77.5956603,
                12.9734683
              ],
              [
                77.5956609,
                12.9735837
              ],
              [
                77.5955473,
                12.9735833
              ],
              [
                77.5955469,
                12.9734677
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-091",
        "properties": {
          "building_id": "BLD-091",
          "parent_parcel_id": "P-072",
          "footprint_area_sqm": 149.1,
          "perimeter_m": 49.4,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 13.3,
          "stories": 2,
          "extraction_confidence": 95.7
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955579,
                12.9734608
              ],
              [
                77.5956556,
                12.9734617
              ],
              [
                77.5956552,
                12.9735887
              ],
              [
                77.5955578,
                12.9735884
              ],
              [
                77.5955579,
                12.9734608
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-092",
        "properties": {
          "building_id": "BLD-092",
          "parent_parcel_id": "P-073",
          "footprint_area_sqm": 155.7,
          "perimeter_m": 50.5,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 5.6,
          "stories": 3,
          "extraction_confidence": 95.8
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5959233,
                12.9728246
              ],
              [
                77.5960226,
                12.9728234
              ],
              [
                77.5960212,
                12.972956
              ],
              [
                77.5959233,
                12.972955
              ],
              [
                77.5959233,
                12.9728246
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-093",
        "properties": {
          "building_id": "BLD-093",
          "parent_parcel_id": "P-075",
          "footprint_area_sqm": 155.6,
          "perimeter_m": 50.6,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 9.1,
          "stories": 2,
          "extraction_confidence": 97.9
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5962704,
                12.9728202
              ],
              [
                77.5963671,
                12.9728195
              ],
              [
                77.5963668,
                12.9729529
              ],
              [
                77.5962686,
                12.9729527
              ],
              [
                77.5962704,
                12.9728202
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-094",
        "properties": {
          "building_id": "BLD-094",
          "parent_parcel_id": "P-075",
          "footprint_area_sqm": 189.6,
          "perimeter_m": 55.1,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 6.1,
          "stories": 3,
          "extraction_confidence": 96.1
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5962482,
                12.9728258
              ],
              [
                77.596372,
                12.9728244
              ],
              [
                77.5963711,
                12.9729534
              ],
              [
                77.596248,
                12.9729526
              ],
              [
                77.5962482,
                12.9728258
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-095",
        "properties": {
          "building_id": "BLD-095",
          "parent_parcel_id": "P-076",
          "footprint_area_sqm": 146.6,
          "perimeter_m": 48.8,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 6.5,
          "stories": 4,
          "extraction_confidence": 97.0
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5964364,
                12.9728261
              ],
              [
                77.5965348,
                12.972825
              ],
              [
                77.5965364,
                12.9729493
              ],
              [
                77.5964376,
                12.9729494
              ],
              [
                77.5964364,
                12.9728261
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-096",
        "properties": {
          "building_id": "BLD-096",
          "parent_parcel_id": "P-077",
          "footprint_area_sqm": 167.0,
          "perimeter_m": 52.3,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 11.2,
          "stories": 2,
          "extraction_confidence": 93.8
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5965845,
                12.9728011
              ],
              [
                77.5966865,
                12.9727995
              ],
              [
                77.596687,
                12.9729363
              ],
              [
                77.5965847,
                12.9729367
              ],
              [
                77.5965845,
                12.9728011
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-097",
        "properties": {
          "building_id": "BLD-097",
          "parent_parcel_id": "P-077",
          "footprint_area_sqm": 192.7,
          "perimeter_m": 55.9,
          "roof_type": "Pitched Tile Roof",
          "estimated_height_m": 11.1,
          "stories": 2,
          "extraction_confidence": 95.3
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5965935,
                12.9728173
              ],
              [
                77.5967083,
                12.972817
              ],
              [
                77.5967087,
                12.9729577
              ],
              [
                77.5965943,
                12.9729567
              ],
              [
                77.5965935,
                12.9728173
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-098",
        "properties": {
          "building_id": "BLD-098",
          "parent_parcel_id": "P-078",
          "footprint_area_sqm": 207.5,
          "perimeter_m": 57.8,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 4.7,
          "stories": 2,
          "extraction_confidence": 95.2
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5967471,
                12.9728012
              ],
              [
                77.5968706,
                12.9728017
              ],
              [
                77.5968718,
                12.972942
              ],
              [
                77.596748,
                12.9729405
              ],
              [
                77.5967471,
                12.9728012
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-099",
        "properties": {
          "building_id": "BLD-099",
          "parent_parcel_id": "P-079",
          "footprint_area_sqm": 150.6,
          "perimeter_m": 49.9,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 9.4,
          "stories": 3,
          "extraction_confidence": 92.1
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.595937,
                12.9730068
              ],
              [
                77.5960315,
                12.9730063
              ],
              [
                77.5960303,
                12.9731396
              ],
              [
                77.5959363,
                12.9731396
              ],
              [
                77.595937,
                12.9730068
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-100",
        "properties": {
          "building_id": "BLD-100",
          "parent_parcel_id": "P-079",
          "footprint_area_sqm": 191.4,
          "perimeter_m": 55.7,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 10.6,
          "stories": 2,
          "extraction_confidence": 92.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5959346,
                12.9730212
              ],
              [
                77.5960498,
                12.9730224
              ],
              [
                77.5960492,
                12.9731616
              ],
              [
                77.595936,
                12.9731612
              ],
              [
                77.5959346,
                12.9730212
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-101",
        "properties": {
          "building_id": "BLD-101",
          "parent_parcel_id": "P-080",
          "footprint_area_sqm": 155.0,
          "perimeter_m": 50.9,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 12.6,
          "stories": 2,
          "extraction_confidence": 93.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5961012,
                12.973021
              ],
              [
                77.5961945,
                12.9730209
              ],
              [
                77.5961944,
                12.9731588
              ],
              [
                77.5961005,
                12.9731589
              ],
              [
                77.5961012,
                12.973021
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-102",
        "properties": {
          "building_id": "BLD-102",
          "parent_parcel_id": "P-081",
          "footprint_area_sqm": 192.1,
          "perimeter_m": 56.1,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 10.1,
          "stories": 1,
          "extraction_confidence": 93.9
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5962718,
                12.9730413
              ],
              [
                77.5963817,
                12.9730404
              ],
              [
                77.5963819,
                12.9731873
              ],
              [
                77.5962733,
                12.9731873
              ],
              [
                77.5962718,
                12.9730413
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-103",
        "properties": {
          "building_id": "BLD-103",
          "parent_parcel_id": "P-082",
          "footprint_area_sqm": 128.7,
          "perimeter_m": 45.5,
          "roof_type": "Commercial Structure",
          "estimated_height_m": 11.4,
          "stories": 2,
          "extraction_confidence": 92.4
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5964117,
                12.9730657
              ],
              [
                77.5965071,
                12.9730665
              ],
              [
                77.5965079,
                12.9731779
              ],
              [
                77.5964111,
                12.9731773
              ],
              [
                77.5964117,
                12.9730657
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-104",
        "properties": {
          "building_id": "BLD-104",
          "parent_parcel_id": "P-085",
          "footprint_area_sqm": 134.6,
          "perimeter_m": 46.6,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 6.2,
          "stories": 1,
          "extraction_confidence": 96.0
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5959406,
                12.973278
              ],
              [
                77.5960378,
                12.9732778
              ],
              [
                77.5960381,
                12.9733921
              ],
              [
                77.5959395,
                12.9733927
              ],
              [
                77.5959406,
                12.973278
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-105",
        "properties": {
          "building_id": "BLD-105",
          "parent_parcel_id": "P-085",
          "footprint_area_sqm": 199.3,
          "perimeter_m": 56.6,
          "roof_type": "Flat Reinforced Concrete",
          "estimated_height_m": 13.6,
          "stories": 1,
          "extraction_confidence": 98.3
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5959142,
                12.9732352
              ],
              [
                77.5960359,
                12.973234
              ],
              [
                77.5960361,
                12.9733717
              ],
              [
                77.5959151,
                12.9733711
              ],
              [
                77.5959142,
                12.9732352
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-106",
        "properties": {
          "building_id": "BLD-106",
          "parent_parcel_id": "P-087",
          "footprint_area_sqm": 184.0,
          "perimeter_m": 54.6,
          "roof_type": "Terrace with Solar Array",
          "estimated_height_m": 11.3,
          "stories": 1,
          "extraction_confidence": 92.3
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5962386,
                12.9732359
              ],
              [
                77.5963513,
                12.9732358
              ],
              [
                77.5963503,
                12.9733721
              ],
              [
                77.596238,
                12.9733721
              ],
              [
                77.5962386,
                12.9732359
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-107",
        "properties": {
          "building_id": "BLD-107",
          "parent_parcel_id": "P-030",
          "footprint_area_sqm": 36.0,
          "perimeter_m": 24.0,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5967814,
                12.9717723
              ],
              [
                77.5968367,
                12.9717721
              ],
              [
                77.5968369,
                12.9718259
              ],
              [
                77.5967806,
                12.971826
              ],
              [
                77.5967814,
                12.9717723
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-108",
        "properties": {
          "building_id": "BLD-108",
          "parent_parcel_id": "P-051",
          "footprint_area_sqm": 35.9,
          "perimeter_m": 24.0,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5950812,
                12.9728516
              ],
              [
                77.595137,
                12.972852
              ],
              [
                77.5951368,
                12.9729054
              ],
              [
                77.5950814,
                12.9729059
              ],
              [
                77.5950812,
                12.9728516
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-109",
        "properties": {
          "building_id": "BLD-109",
          "parent_parcel_id": "P-042",
          "footprint_area_sqm": 36.2,
          "perimeter_m": 24.1,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5967804,
                12.9722029
              ],
              [
                77.5968356,
                12.9722029
              ],
              [
                77.5968363,
                12.9722573
              ],
              [
                77.5967802,
                12.9722569
              ],
              [
                77.5967804,
                12.9722029
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-110",
        "properties": {
          "building_id": "BLD-110",
          "parent_parcel_id": "P-060",
          "footprint_area_sqm": 35.8,
          "perimeter_m": 23.9,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955812,
                12.973068
              ],
              [
                77.5956367,
                12.9730686
              ],
              [
                77.5956368,
                12.9731223
              ],
              [
                77.5955817,
                12.973122
              ],
              [
                77.5955812,
                12.973068
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-111",
        "properties": {
          "building_id": "BLD-111",
          "parent_parcel_id": "P-039",
          "footprint_area_sqm": 35.4,
          "perimeter_m": 23.8,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5962823,
                12.9722045
              ],
              [
                77.596337,
                12.9722046
              ],
              [
                77.5963373,
                12.972258
              ],
              [
                77.5962818,
                12.9722582
              ],
              [
                77.5962823,
                12.9722045
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-112",
        "properties": {
          "building_id": "BLD-112",
          "parent_parcel_id": "P-066",
          "footprint_area_sqm": 36.6,
          "perimeter_m": 24.2,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955802,
                12.9732851
              ],
              [
                77.5956364,
                12.973285
              ],
              [
                77.5956365,
                12.9733397
              ],
              [
                77.5955807,
                12.9733394
              ],
              [
                77.5955802,
                12.9732851
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-113",
        "properties": {
          "building_id": "BLD-113",
          "parent_parcel_id": "P-013",
          "footprint_area_sqm": 36.4,
          "perimeter_m": 24.1,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5947465,
                12.9722047
              ],
              [
                77.5948017,
                12.972204
              ],
              [
                77.5948023,
                12.9722589
              ],
              [
                77.5947462,
                12.9722588
              ],
              [
                77.5947465,
                12.9722047
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-114",
        "properties": {
          "building_id": "BLD-114",
          "parent_parcel_id": "P-048",
          "footprint_area_sqm": 35.4,
          "perimeter_m": 23.8,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5967818,
                12.9724182
              ],
              [
                77.5968368,
                12.9724179
              ],
              [
                77.5968375,
                12.9724714
              ],
              [
                77.5967821,
                12.9724716
              ],
              [
                77.5967818,
                12.9724182
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-115",
        "properties": {
          "building_id": "BLD-115",
          "parent_parcel_id": "P-083",
          "footprint_area_sqm": 35.9,
          "perimeter_m": 24.0,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5966146,
                12.973068
              ],
              [
                77.5966705,
                12.9730686
              ],
              [
                77.59667,
                12.9731219
              ],
              [
                77.5966146,
                12.9731221
              ],
              [
                77.5966146,
                12.973068
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-116",
        "properties": {
          "building_id": "BLD-116",
          "parent_parcel_id": "P-074",
          "footprint_area_sqm": 35.7,
          "perimeter_m": 23.9,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5961165,
                12.972854
              ],
              [
                77.596172,
                12.9728537
              ],
              [
                77.596172,
                12.9729077
              ],
              [
                77.5961169,
                12.9729076
              ],
              [
                77.5961165,
                12.972854
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-117",
        "properties": {
          "building_id": "BLD-117",
          "parent_parcel_id": "P-058",
          "footprint_area_sqm": 35.9,
          "perimeter_m": 24.0,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5952467,
                12.9730676
              ],
              [
                77.5953019,
                12.9730677
              ],
              [
                77.5953016,
                12.9731219
              ],
              [
                77.5952464,
                12.9731216
              ],
              [
                77.5952467,
                12.9730676
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-118",
        "properties": {
          "building_id": "BLD-118",
          "parent_parcel_id": "P-036",
          "footprint_area_sqm": 35.9,
          "perimeter_m": 24.0,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5967809,
                12.9719878
              ],
              [
                77.5968366,
                12.9719881
              ],
              [
                77.5968363,
                12.9720423
              ],
              [
                77.5967811,
                12.9720414
              ],
              [
                77.5967809,
                12.9719878
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-119",
        "properties": {
          "building_id": "BLD-119",
          "parent_parcel_id": "P-049",
          "footprint_area_sqm": 36.1,
          "perimeter_m": 24.0,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5947464,
                12.9728519
              ],
              [
                77.5948017,
                12.972852
              ],
              [
                77.594802,
                12.9729061
              ],
              [
                77.594746,
                12.9729058
              ],
              [
                77.5947464,
                12.9728519
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-120",
        "properties": {
          "building_id": "BLD-120",
          "parent_parcel_id": "P-041",
          "footprint_area_sqm": 36.4,
          "perimeter_m": 24.1,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5966142,
                12.9722031
              ],
              [
                77.5966699,
                12.9722034
              ],
              [
                77.5966699,
                12.9722576
              ],
              [
                77.596614,
                12.9722577
              ],
              [
                77.5966142,
                12.9722031
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-121",
        "properties": {
          "building_id": "BLD-121",
          "parent_parcel_id": "P-030",
          "footprint_area_sqm": 36.6,
          "perimeter_m": 24.2,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5967815,
                12.9717719
              ],
              [
                77.5968366,
                12.971772
              ],
              [
                77.5968368,
                12.9718267
              ],
              [
                77.5967806,
                12.9718267
              ],
              [
                77.5967815,
                12.9717719
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-122",
        "properties": {
          "building_id": "BLD-122",
          "parent_parcel_id": "P-029",
          "footprint_area_sqm": 35.7,
          "perimeter_m": 23.9,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5966166,
                12.9717692
              ],
              [
                77.5966719,
                12.9717692
              ],
              [
                77.5966724,
                12.9718226
              ],
              [
                77.5966163,
                12.9718227
              ],
              [
                77.5966166,
                12.9717692
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-123",
        "properties": {
          "building_id": "BLD-123",
          "parent_parcel_id": "P-046",
          "footprint_area_sqm": 36.2,
          "perimeter_m": 24.1,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5964505,
                12.9724202
              ],
              [
                77.5965058,
                12.972421
              ],
              [
                77.5965056,
                12.9724747
              ],
              [
                77.5964498,
                12.9724751
              ],
              [
                77.5964505,
                12.9724202
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-124",
        "properties": {
          "building_id": "BLD-124",
          "parent_parcel_id": "P-064",
          "footprint_area_sqm": 36.0,
          "perimeter_m": 24.0,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.59525,
                12.9732838
              ],
              [
                77.595305,
                12.9732836
              ],
              [
                77.5953055,
                12.9733377
              ],
              [
                77.5952499,
                12.973338
              ],
              [
                77.59525,
                12.9732838
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-125",
        "properties": {
          "building_id": "BLD-125",
          "parent_parcel_id": "P-079",
          "footprint_area_sqm": 36.4,
          "perimeter_m": 24.1,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5959467,
                12.9730703
              ],
              [
                77.5960027,
                12.9730711
              ],
              [
                77.5960028,
                12.9731246
              ],
              [
                77.5959465,
                12.9731248
              ],
              [
                77.5959467,
                12.9730703
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-126",
        "properties": {
          "building_id": "BLD-126",
          "parent_parcel_id": "P-019",
          "footprint_area_sqm": 35.8,
          "perimeter_m": 23.9,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5947477,
                12.9724191
              ],
              [
                77.5948033,
                12.9724192
              ],
              [
                77.5948028,
                12.9724732
              ],
              [
                77.5947474,
                12.9724724
              ],
              [
                77.5947477,
                12.9724191
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-127",
        "properties": {
          "building_id": "BLD-127",
          "parent_parcel_id": "P-039",
          "footprint_area_sqm": 36.2,
          "perimeter_m": 24.1,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5962818,
                12.9722047
              ],
              [
                77.5963377,
                12.9722042
              ],
              [
                77.5963376,
                12.9722583
              ],
              [
                77.5962818,
                12.9722585
              ],
              [
                77.5962818,
                12.9722047
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-128",
        "properties": {
          "building_id": "BLD-128",
          "parent_parcel_id": "P-072",
          "footprint_area_sqm": 36.0,
          "perimeter_m": 24.0,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5955808,
                12.9735015
              ],
              [
                77.5956364,
                12.9735008
              ],
              [
                77.5956362,
                12.9735549
              ],
              [
                77.5955805,
                12.9735553
              ],
              [
                77.5955808,
                12.9735015
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-129",
        "properties": {
          "building_id": "BLD-129",
          "parent_parcel_id": "P-017",
          "footprint_area_sqm": 36.3,
          "perimeter_m": 24.1,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5954122,
                12.9722041
              ],
              [
                77.5954681,
                12.9722047
              ],
              [
                77.5954683,
                12.9722589
              ],
              [
                77.5954126,
                12.9722584
              ],
              [
                77.5954122,
                12.9722041
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-130",
        "properties": {
          "building_id": "BLD-130",
          "parent_parcel_id": "P-041",
          "footprint_area_sqm": 35.5,
          "perimeter_m": 23.8,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5966145,
                12.972204
              ],
              [
                77.5966693,
                12.9722036
              ],
              [
                77.59667,
                12.9722573
              ],
              [
                77.5966143,
                12.9722574
              ],
              [
                77.5966145,
                12.972204
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-131",
        "properties": {
          "building_id": "BLD-131",
          "parent_parcel_id": "P-041",
          "footprint_area_sqm": 35.9,
          "perimeter_m": 24.0,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5966138,
                12.9722039
              ],
              [
                77.5966692,
                12.9722037
              ],
              [
                77.5966697,
                12.972258
              ],
              [
                77.5966141,
                12.9722574
              ],
              [
                77.5966138,
                12.9722039
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-132",
        "properties": {
          "building_id": "BLD-132",
          "parent_parcel_id": "P-032",
          "footprint_area_sqm": 35.8,
          "perimeter_m": 23.9,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5961179,
                12.9719867
              ],
              [
                77.5961734,
                12.971987
              ],
              [
                77.5961727,
                12.9720408
              ],
              [
                77.5961176,
                12.9720406
              ],
              [
                77.5961179,
                12.9719867
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-133",
        "properties": {
          "building_id": "BLD-133",
          "parent_parcel_id": "P-053",
          "footprint_area_sqm": 36.3,
          "perimeter_m": 24.1,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5954136,
                12.9728528
              ],
              [
                77.5954692,
                12.9728526
              ],
              [
                77.5954691,
                12.9729073
              ],
              [
                77.5954138,
                12.9729071
              ],
              [
                77.5954136,
                12.9728528
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-134",
        "properties": {
          "building_id": "BLD-134",
          "parent_parcel_id": "P-021",
          "footprint_area_sqm": 35.9,
          "perimeter_m": 24.0,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5950811,
                12.9724199
              ],
              [
                77.5951362,
                12.9724192
              ],
              [
                77.5951364,
                12.9724733
              ],
              [
                77.595081,
                12.972474
              ],
              [
                77.5950811,
                12.9724199
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-135",
        "properties": {
          "building_id": "BLD-135",
          "parent_parcel_id": "P-021",
          "footprint_area_sqm": 36.1,
          "perimeter_m": 24.0,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5950813,
                12.9724196
              ],
              [
                77.595137,
                12.9724192
              ],
              [
                77.5951367,
                12.9724738
              ],
              [
                77.5950811,
                12.9724732
              ],
              [
                77.5950813,
                12.9724196
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-136",
        "properties": {
          "building_id": "BLD-136",
          "parent_parcel_id": "P-084",
          "footprint_area_sqm": 35.8,
          "perimeter_m": 23.9,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5967816,
                12.9730696
              ],
              [
                77.596837,
                12.9730689
              ],
              [
                77.5968371,
                12.973123
              ],
              [
                77.596782,
                12.9731235
              ],
              [
                77.5967816,
                12.9730696
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-137",
        "properties": {
          "building_id": "BLD-137",
          "parent_parcel_id": "P-070",
          "footprint_area_sqm": 36.4,
          "perimeter_m": 24.1,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5952469,
                12.9735018
              ],
              [
                77.5953024,
                12.9735016
              ],
              [
                77.5953027,
                12.9735564
              ],
              [
                77.5952468,
                12.973556
              ],
              [
                77.5952469,
                12.9735018
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-138",
        "properties": {
          "building_id": "BLD-138",
          "parent_parcel_id": "P-055",
          "footprint_area_sqm": 35.9,
          "perimeter_m": 24.0,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5947483,
                12.9730682
              ],
              [
                77.5948042,
                12.9730679
              ],
              [
                77.5948037,
                12.9731217
              ],
              [
                77.5947488,
                12.9731224
              ],
              [
                77.5947483,
                12.9730682
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-139",
        "properties": {
          "building_id": "BLD-139",
          "parent_parcel_id": "P-061",
          "footprint_area_sqm": 35.8,
          "perimeter_m": 23.9,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5947506,
                12.973284
              ],
              [
                77.5948056,
                12.9732842
              ],
              [
                77.5948059,
                12.9733379
              ],
              [
                77.5947503,
                12.973338
              ],
              [
                77.5947506,
                12.973284
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-140",
        "properties": {
          "building_id": "BLD-140",
          "parent_parcel_id": "P-049",
          "footprint_area_sqm": 36.1,
          "perimeter_m": 24.0,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.594746,
                12.972852
              ],
              [
                77.5948014,
                12.972852
              ],
              [
                77.5948014,
                12.9729059
              ],
              [
                77.5947457,
                12.9729063
              ],
              [
                77.594746,
                12.972852
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-141",
        "properties": {
          "building_id": "BLD-141",
          "parent_parcel_id": "P-086",
          "footprint_area_sqm": 36.3,
          "perimeter_m": 24.1,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.5961157,
                12.9732849
              ],
              [
                77.5961718,
                12.9732846
              ],
              [
                77.5961717,
                12.9733385
              ],
              [
                77.5961156,
                12.9733387
              ],
              [
                77.5961157,
                12.9732849
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BLD-142",
        "properties": {
          "building_id": "BLD-142",
          "parent_parcel_id": "P-067",
          "footprint_area_sqm": 36.5,
          "perimeter_m": 24.2,
          "roof_type": "Auxiliary Structure / Garage",
          "estimated_height_m": 3.2,
          "stories": 1,
          "extraction_confidence": 94.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.59475,
                12.9735016
              ],
              [
                77.5948058,
                12.9735015
              ],
              [
                77.5948059,
                12.9735556
              ],
              [
                77.5947497,
                12.973556
              ],
              [
                77.59475,
                12.9735016
              ]
            ]
          ]
        }
      }
    ]
  },
  "roads": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "RD-001",
        "properties": {
          "road_id": "RD-001",
          "name": "Central Sector Boulevard (Main Arterial)",
          "hierarchy": "Arterial",
          "width_meters": 18,
          "length_meters": 400.0,
          "surface": "Bituminous Asphalt with Thermoplastic Markings",
          "extraction_confidence": 96.8
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              77.594415,
              12.972663
            ],
            [
              77.598113,
              12.972663
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "RD-002",
        "properties": {
          "road_id": "RD-002",
          "name": "South Commercial Expressway",
          "hierarchy": "Arterial",
          "width_meters": 22,
          "length_meters": 400.0,
          "surface": "Bituminous Asphalt with Thermoplastic Markings",
          "extraction_confidence": 96.8
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              77.594415,
              12.973744
            ],
            [
              77.598113,
              12.973744
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "RD-003",
        "properties": {
          "road_id": "RD-003",
          "name": "North Perimeter Parkway",
          "hierarchy": "Collector",
          "width_meters": 14,
          "length_meters": 400.0,
          "surface": "Bituminous Asphalt with Thermoplastic Markings",
          "extraction_confidence": 96.8
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              77.594415,
              12.971555
            ],
            [
              77.598113,
              12.971555
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "RD-004",
        "properties": {
          "road_id": "RD-004",
          "name": "South Perimeter Parkway",
          "hierarchy": "Collector",
          "width_meters": 14,
          "length_meters": 400.0,
          "surface": "Bituminous Asphalt with Thermoplastic Markings",
          "extraction_confidence": 96.8
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              77.594415,
              12.974348
            ],
            [
              77.598113,
              12.974348
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "RD-005",
        "properties": {
          "road_id": "RD-005",
          "name": "Avenue 1 (West Spine)",
          "hierarchy": "Collector",
          "width_meters": 14,
          "length_meters": 340.0,
          "surface": "Bituminous Asphalt with Thermoplastic Markings",
          "extraction_confidence": 96.8
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              77.594554,
              12.97142
            ],
            [
              77.594554,
              12.974483
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "RD-006",
        "properties": {
          "road_id": "RD-006",
          "name": "Avenue 2 (Central Spine)",
          "hierarchy": "Collector",
          "width_meters": 16,
          "length_meters": 340.0,
          "surface": "Bituminous Asphalt with Thermoplastic Markings",
          "extraction_confidence": 96.8
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              77.595783,
              12.97142
            ],
            [
              77.595783,
              12.974483
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "RD-007",
        "properties": {
          "road_id": "RD-007",
          "name": "Avenue 3 (East Spine)",
          "hierarchy": "Collector",
          "width_meters": 14,
          "length_meters": 340.0,
          "surface": "Bituminous Asphalt with Thermoplastic Markings",
          "extraction_confidence": 96.8
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              77.596985,
              12.97142
            ],
            [
              77.596985,
              12.974483
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "RD-008",
        "properties": {
          "road_id": "RD-008",
          "name": "Avenue 4 (East Outer Ring)",
          "hierarchy": "Local Access",
          "width_meters": 10,
          "length_meters": 340.0,
          "surface": "Bituminous Asphalt with Thermoplastic Markings",
          "extraction_confidence": 96.8
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              77.597974,
              12.97142
            ],
            [
              77.597974,
              12.974483
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "RD-009",
        "properties": {
          "road_id": "RD-009",
          "name": "Sector 4-A Internal Lane 1",
          "hierarchy": "Access Lane",
          "width_meters": 8,
          "length_meters": 110.0,
          "surface": "Bituminous Asphalt with Thermoplastic Markings",
          "extraction_confidence": 96.8
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              77.595201,
              12.9716
            ],
            [
              77.595201,
              12.972591
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "RD-010",
        "properties": {
          "road_id": "RD-010",
          "name": "Sector 4-B Internal Lane 2",
          "hierarchy": "Access Lane",
          "width_meters": 8,
          "length_meters": 110.0,
          "surface": "Bituminous Asphalt with Thermoplastic Markings",
          "extraction_confidence": 96.8
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              77.596403,
              12.9716
            ],
            [
              77.596403,
              12.972591
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "RD-011",
        "properties": {
          "road_id": "RD-011",
          "name": "Sector 4-C Internal Lane 3",
          "hierarchy": "Access Lane",
          "width_meters": 8,
          "length_meters": 100.0,
          "surface": "Bituminous Asphalt with Thermoplastic Markings",
          "extraction_confidence": 96.8
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              77.595201,
              12.972771
            ],
            [
              77.595201,
              12.973672
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "RD-012",
        "properties": {
          "road_id": "RD-012",
          "name": "Sector 4-D Internal Lane 4",
          "hierarchy": "Access Lane",
          "width_meters": 8,
          "length_meters": 100.0,
          "surface": "Bituminous Asphalt with Thermoplastic Markings",
          "extraction_confidence": 96.8
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              77.596403,
              12.972771
            ],
            [
              77.596403,
              12.973672
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "RD-013",
        "properties": {
          "road_id": "RD-013",
          "name": "Enclave Access Loop E",
          "hierarchy": "Access Lane",
          "width_meters": 8,
          "length_meters": 110.0,
          "surface": "Bituminous Asphalt with Thermoplastic Markings",
          "extraction_confidence": 96.8
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              77.597512,
              12.9716
            ],
            [
              77.597512,
              12.972591
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "RD-014",
        "properties": {
          "road_id": "RD-014",
          "name": "Civic Access Way F",
          "hierarchy": "Access Lane",
          "width_meters": 8,
          "length_meters": 100.0,
          "surface": "Bituminous Asphalt with Thermoplastic Markings",
          "extraction_confidence": 96.8
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              77.597512,
              12.972771
            ],
            [
              77.597512,
              12.973672
            ]
          ]
        }
      }
    ]
  },
  "uav_images": [
    {
      "image_id": "DJI_20260830_0001.JPG",
      "sequence": 1,
      "flight_line": 1,
      "latitude": 12.971735,
      "longitude": 77.594785,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 1774,
      "reprojection_error_px": 0.66,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.5943689,
              12.9714649
            ],
            [
              77.5952009,
              12.9714649
            ],
            [
              77.5952009,
              12.9720054
            ],
            [
              77.5943689,
              12.9720054
            ],
            [
              77.5943689,
              12.9714649
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0002.JPG",
      "sequence": 2,
      "flight_line": 1,
      "latitude": 12.971735,
      "longitude": 77.59534,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 1722,
      "reprojection_error_px": 0.62,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.5949236,
              12.9714649
            ],
            [
              77.5957556,
              12.9714649
            ],
            [
              77.5957556,
              12.9720054
            ],
            [
              77.5949236,
              12.9720054
            ],
            [
              77.5949236,
              12.9714649
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0003.JPG",
      "sequence": 3,
      "flight_line": 1,
      "latitude": 12.971735,
      "longitude": 77.595894,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 2358,
      "reprojection_error_px": 0.65,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.5954783,
              12.9714649
            ],
            [
              77.5963103,
              12.9714649
            ],
            [
              77.5963103,
              12.9720054
            ],
            [
              77.5954783,
              12.9720054
            ],
            [
              77.5954783,
              12.9714649
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0004.JPG",
      "sequence": 4,
      "flight_line": 1,
      "latitude": 12.971735,
      "longitude": 77.596449,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 1625,
      "reprojection_error_px": 0.65,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.596033,
              12.9714649
            ],
            [
              77.596865,
              12.9714649
            ],
            [
              77.596865,
              12.9720054
            ],
            [
              77.596033,
              12.9720054
            ],
            [
              77.596033,
              12.9714649
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0005.JPG",
      "sequence": 5,
      "flight_line": 1,
      "latitude": 12.971735,
      "longitude": 77.597004,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 2667,
      "reprojection_error_px": 0.49,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.5965877,
              12.9714649
            ],
            [
              77.5974197,
              12.9714649
            ],
            [
              77.5974197,
              12.9720054
            ],
            [
              77.5965877,
              12.9720054
            ],
            [
              77.5965877,
              12.9714649
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0006.JPG",
      "sequence": 6,
      "flight_line": 1,
      "latitude": 12.971735,
      "longitude": 77.597558,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 1520,
      "reprojection_error_px": 0.59,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.5971424,
              12.9714649
            ],
            [
              77.5979744,
              12.9714649
            ],
            [
              77.5979744,
              12.9720054
            ],
            [
              77.5971424,
              12.9720054
            ],
            [
              77.5971424,
              12.9714649
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0007.JPG",
      "sequence": 7,
      "flight_line": 2,
      "latitude": 12.972456,
      "longitude": 77.597558,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 1621,
      "reprojection_error_px": 0.67,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.5971424,
              12.9721856
            ],
            [
              77.5979744,
              12.9721856
            ],
            [
              77.5979744,
              12.9727261
            ],
            [
              77.5971424,
              12.9727261
            ],
            [
              77.5971424,
              12.9721856
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0008.JPG",
      "sequence": 8,
      "flight_line": 2,
      "latitude": 12.972456,
      "longitude": 77.597004,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 2324,
      "reprojection_error_px": 0.4,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.5965877,
              12.9721856
            ],
            [
              77.5974197,
              12.9721856
            ],
            [
              77.5974197,
              12.9727261
            ],
            [
              77.5965877,
              12.9727261
            ],
            [
              77.5965877,
              12.9721856
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0009.JPG",
      "sequence": 9,
      "flight_line": 2,
      "latitude": 12.972456,
      "longitude": 77.596449,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 2457,
      "reprojection_error_px": 0.47,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.596033,
              12.9721856
            ],
            [
              77.596865,
              12.9721856
            ],
            [
              77.596865,
              12.9727261
            ],
            [
              77.596033,
              12.9727261
            ],
            [
              77.596033,
              12.9721856
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0010.JPG",
      "sequence": 10,
      "flight_line": 2,
      "latitude": 12.972456,
      "longitude": 77.595894,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 1523,
      "reprojection_error_px": 0.65,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.5954783,
              12.9721856
            ],
            [
              77.5963103,
              12.9721856
            ],
            [
              77.5963103,
              12.9727261
            ],
            [
              77.5954783,
              12.9727261
            ],
            [
              77.5954783,
              12.9721856
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0011.JPG",
      "sequence": 11,
      "flight_line": 2,
      "latitude": 12.972456,
      "longitude": 77.59534,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 2636,
      "reprojection_error_px": 0.48,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.5949236,
              12.9721856
            ],
            [
              77.5957556,
              12.9721856
            ],
            [
              77.5957556,
              12.9727261
            ],
            [
              77.5949236,
              12.9727261
            ],
            [
              77.5949236,
              12.9721856
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0012.JPG",
      "sequence": 12,
      "flight_line": 2,
      "latitude": 12.972456,
      "longitude": 77.594785,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 1476,
      "reprojection_error_px": 0.46,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.5943689,
              12.9721856
            ],
            [
              77.5952009,
              12.9721856
            ],
            [
              77.5952009,
              12.9727261
            ],
            [
              77.5943689,
              12.9727261
            ],
            [
              77.5943689,
              12.9721856
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0013.JPG",
      "sequence": 13,
      "flight_line": 3,
      "latitude": 12.973177,
      "longitude": 77.594785,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 1461,
      "reprojection_error_px": 0.63,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.5943689,
              12.9729063
            ],
            [
              77.5952009,
              12.9729063
            ],
            [
              77.5952009,
              12.9734468
            ],
            [
              77.5943689,
              12.9734468
            ],
            [
              77.5943689,
              12.9729063
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0014.JPG",
      "sequence": 14,
      "flight_line": 3,
      "latitude": 12.973177,
      "longitude": 77.59534,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 2045,
      "reprojection_error_px": 0.58,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.5949236,
              12.9729063
            ],
            [
              77.5957556,
              12.9729063
            ],
            [
              77.5957556,
              12.9734468
            ],
            [
              77.5949236,
              12.9734468
            ],
            [
              77.5949236,
              12.9729063
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0015.JPG",
      "sequence": 15,
      "flight_line": 3,
      "latitude": 12.973177,
      "longitude": 77.595894,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 2697,
      "reprojection_error_px": 0.46,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.5954783,
              12.9729063
            ],
            [
              77.5963103,
              12.9729063
            ],
            [
              77.5963103,
              12.9734468
            ],
            [
              77.5954783,
              12.9734468
            ],
            [
              77.5954783,
              12.9729063
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0016.JPG",
      "sequence": 16,
      "flight_line": 3,
      "latitude": 12.973177,
      "longitude": 77.596449,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 1641,
      "reprojection_error_px": 0.49,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.596033,
              12.9729063
            ],
            [
              77.596865,
              12.9729063
            ],
            [
              77.596865,
              12.9734468
            ],
            [
              77.596033,
              12.9734468
            ],
            [
              77.596033,
              12.9729063
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0017.JPG",
      "sequence": 17,
      "flight_line": 3,
      "latitude": 12.973177,
      "longitude": 77.597004,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 2479,
      "reprojection_error_px": 0.6,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.5965877,
              12.9729063
            ],
            [
              77.5974197,
              12.9729063
            ],
            [
              77.5974197,
              12.9734468
            ],
            [
              77.5965877,
              12.9734468
            ],
            [
              77.5965877,
              12.9729063
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0018.JPG",
      "sequence": 18,
      "flight_line": 3,
      "latitude": 12.973177,
      "longitude": 77.597558,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 2025,
      "reprojection_error_px": 0.41,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.5971424,
              12.9729063
            ],
            [
              77.5979744,
              12.9729063
            ],
            [
              77.5979744,
              12.9734468
            ],
            [
              77.5971424,
              12.9734468
            ],
            [
              77.5971424,
              12.9729063
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0019.JPG",
      "sequence": 19,
      "flight_line": 4,
      "latitude": 12.973897,
      "longitude": 77.597558,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 2514,
      "reprojection_error_px": 0.55,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.5971424,
              12.973627
            ],
            [
              77.5979744,
              12.973627
            ],
            [
              77.5979744,
              12.9741676
            ],
            [
              77.5971424,
              12.9741676
            ],
            [
              77.5971424,
              12.973627
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0020.JPG",
      "sequence": 20,
      "flight_line": 4,
      "latitude": 12.973897,
      "longitude": 77.597004,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 2384,
      "reprojection_error_px": 0.37,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.5965877,
              12.973627
            ],
            [
              77.5974197,
              12.973627
            ],
            [
              77.5974197,
              12.9741676
            ],
            [
              77.5965877,
              12.9741676
            ],
            [
              77.5965877,
              12.973627
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0021.JPG",
      "sequence": 21,
      "flight_line": 4,
      "latitude": 12.973897,
      "longitude": 77.596449,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 2048,
      "reprojection_error_px": 0.47,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.596033,
              12.973627
            ],
            [
              77.596865,
              12.973627
            ],
            [
              77.596865,
              12.9741676
            ],
            [
              77.596033,
              12.9741676
            ],
            [
              77.596033,
              12.973627
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0022.JPG",
      "sequence": 22,
      "flight_line": 4,
      "latitude": 12.973897,
      "longitude": 77.595894,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 2691,
      "reprojection_error_px": 0.35,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.5954783,
              12.973627
            ],
            [
              77.5963103,
              12.973627
            ],
            [
              77.5963103,
              12.9741676
            ],
            [
              77.5954783,
              12.9741676
            ],
            [
              77.5954783,
              12.973627
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0023.JPG",
      "sequence": 23,
      "flight_line": 4,
      "latitude": 12.973897,
      "longitude": 77.59534,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 1830,
      "reprojection_error_px": 0.44,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.5949236,
              12.973627
            ],
            [
              77.5957556,
              12.973627
            ],
            [
              77.5957556,
              12.9741676
            ],
            [
              77.5949236,
              12.9741676
            ],
            [
              77.5949236,
              12.973627
            ]
          ]
        ]
      }
    },
    {
      "image_id": "DJI_20260830_0024.JPG",
      "sequence": 24,
      "flight_line": 4,
      "latitude": 12.973897,
      "longitude": 77.594785,
      "altitude_agl_m": 120.0,
      "gsd_cm_px": 5.0,
      "forward_overlap_pct": 85.0,
      "side_overlap_pct": 80.0,
      "shutter_speed": "1/1000s",
      "iso": 100,
      "focal_length_mm": 35.0,
      "rtk_status": "FIXED (RTK Base Locked)",
      "tie_points_count": 1782,
      "reprojection_error_px": 0.43,
      "footprint_geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              77.5943689,
              12.973627
            ],
            [
              77.5952009,
              12.973627
            ],
            [
              77.5952009,
              12.9741676
            ],
            [
              77.5943689,
              12.9741676
            ],
            [
              77.5943689,
              12.973627
            ]
          ]
        ]
      }
    }
  ],
  "bounds": {
    "min_lng": 77.5941,
    "min_lat": 12.9711,
    "max_lng": 77.59861307193451,
    "max_lat": 12.974982882882884,
    "center": [
      77.59626408670582,
      12.972951351351352
    ]
  }
};

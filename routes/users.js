import express from "express";
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({
    "items": [
      {
        "company_name": "BOSE CHICKEN WORLDISH LTD",
        "company_number": "14125203",
        "company_status": "active",
        "company_type": "ltd",
        "kind": "search-results#company",
        "links": {
          "company_profile": "/company/14125203"
        },
        "date_of_creation": "2022-05-23",
        "registered_office_address": {
          "address_line_1": "465 Mitcham Road",
          "locality": "Croydon",
          "postal_code": "CR0 3HR",
          "country": "England"
        },
        "sic_codes": [
          "56103"
        ]
      },
      {
        "company_name": "KAZMEC LTD",
        "company_number": "14125302",
        "company_status": "active",
        "company_type": "ltd",
        "kind": "search-results#company",
        "links": {
          "company_profile": "/company/14125302"
        },
        "date_of_creation": "2022-05-23",
        "registered_office_address": {
          "address_line_1": "Flat 10, 6 Purley Way",
          "locality": "Croydon",
          "postal_code": "CR0 3FJ",
          "country": "United Kingdom"
        },
        "sic_codes": [
          "56102"
        ]
      },
      {
        "company_name": "WALSH AND WHITESIDE LTD",
        "company_number": "14125336",
        "company_status": "active",
        "company_type": "ltd",
        "kind": "search-results#company",
        "links": {
          "company_profile": "/company/14125336"
        },
        "date_of_creation": "2022-05-23",
        "registered_office_address": {
          "address_line_1": "11 Martin Crescent",
          "locality": "Croydon",
          "postal_code": "CR0 3JQ",
          "country": "United Kingdom"
        },
        "sic_codes": [
          "43390"
        ]
      },
      {
        "company_name": "DAAKPO LIMITED",
        "company_number": "14125758",
        "company_status": "active",
        "company_type": "ltd",
        "kind": "search-results#company",
        "links": {
          "company_profile": "/company/14125758"
        },
        "date_of_creation": "2022-05-23",
        "registered_office_address": {
          "address_line_1": "70 Shrublands Avenue",
          "locality": "Croydon",
          "postal_code": "CR0 8JA",
          "country": "England"
        },
        "sic_codes": [
          "86900"
        ]
      },
      {
        "company_name": "NSH BUILDING SERVICES LTD",
        "company_number": "14125821",
        "company_status": "active",
        "company_type": "ltd",
        "kind": "search-results#company",
        "links": {
          "company_profile": "/company/14125821"
        },
        "date_of_creation": "2022-05-23",
        "registered_office_address": {
          "address_line_1": "355 Thornton Road",
          "locality": "Croydon",
          "postal_code": "CR0 3EZ",
          "country": "United Kingdom"
        },
        "sic_codes": [
          "43999"
        ]
      },
      {
        "company_name": "USWA SHOPS LIMITED",
        "company_number": "14126093",
        "company_status": "active",
        "company_type": "ltd",
        "kind": "search-results#company",
        "links": {
          "company_profile": "/company/14126093"
        },
        "date_of_creation": "2022-05-23",
        "registered_office_address": {
          "address_line_1": "10 Blackhorse Lane",
          "locality": "Croydon",
          "postal_code": "CR0 6RS",
          "country": "England"
        },
        "sic_codes": [
          "47990"
        ]
      },
      {
        "company_name": "MR. PROSPECT C.I.C.",
        "company_number": "14126516",
        "company_status": "active",
        "company_type": "private-limited-guarant-nsc",
        "company_subtype": "community-interest-company",
        "kind": "search-results#company",
        "links": {
          "company_profile": "/company/14126516"
        },
        "date_of_creation": "2022-05-24",
        "registered_office_address": {
          "address_line_1": "82 London Road",
          "locality": "Croydon",
          "postal_code": "CR0 2TB",
          "country": "England"
        },
        "sic_codes": [
          "85590"
        ]
      },
      {
        "company_name": "A&H WAREHOUSE LIMITED",
        "company_number": "14128084",
        "company_status": "active",
        "company_type": "ltd",
        "kind": "search-results#company",
        "links": {
          "company_profile": "/company/14128084"
        },
        "date_of_creation": "2022-05-24",
        "registered_office_address": {
          "address_line_1": "792 Wickham Road",
          "locality": "Croydon",
          "postal_code": "CR0 8EA",
          "country": "England"
        },
        "sic_codes": [
          "47910"
        ]
      },
      {
        "company_name": "UK CALEB . LTD",
        "company_number": "14128891",
        "company_status": "active",
        "company_type": "ltd",
        "kind": "search-results#company",
        "links": {
          "company_profile": "/company/14128891"
        },
        "date_of_creation": "2022-05-24",
        "registered_office_address": {
          "address_line_1": "291 Brighton Road",
          "locality": "South Croydon",
          "postal_code": "CR2 6EQ",
          "country": "United Kingdom"
        },
        "sic_codes": [
          "99999"
        ]
      },
      {
        "company_name": "ATLANTIC MEDIA LIMITED",
        "company_number": "14128898",
        "company_status": "active",
        "company_type": "ltd",
        "kind": "search-results#company",
        "links": {
          "company_profile": "/company/14128898"
        },
        "date_of_creation": "2022-05-24",
        "registered_office_address": {
          "address_line_1": "291 Brighton Road",
          "locality": "South Croydon",
          "postal_code": "CR2 6EQ",
          "country": "United Kingdom"
        },
        "sic_codes": [
          "59112",
          "59132",
          "73110",
          "73120"
        ]
      }
    ],
    "kind": "search#advanced-search",
    "hits": 5266
  });
});

export default router;

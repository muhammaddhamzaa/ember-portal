import Object from "@ember/object";
import _ from 'lodash';

export default Object.extend({
    "_hash": "d8ab2c49496bdb6f8bf6d22d19dfeed1",
    "modules": {
        "Accounts": {
            "fields": {
                "id": {
                    "name": "id",
                    "vname": "LBL_ID",
                    "type": "id",
                    "required": true,
                    "reportable": true,
                    "duplicate_on_record_copy": "no",
                    "comment": "Unique identifier",
                    "mandatory_fetch": true
                },
                "name": {
                    "name": "name",
                    "type": "name",
                    "dbType": "varchar",
                    "vname": "LBL_NAME",
                    "len": 150,
                    "comment": "Name of the Company",
                    "unified_search": true,
                    "full_text_search": {
                        "enabled": true,
                        "searchable": true,
                        "boost": 1.91
                    },
                    "audited": true,
                    "required": true,
                    "importable": "required",
                    "duplicate_on_record_copy": "always",
                    "merge_filter": "selected"
                },
                "date_entered": {
                    "name": "date_entered",
                    "vname": "LBL_DATE_ENTERED",
                    "type": "datetime",
                    "group": "created_by_name",
                    "comment": "Date record created",
                    "enable_range_search": true,
                    "options": "date_range_search_dom",
                    "studio": {
                        "portaleditview": false
                    },
                    "duplicate_on_record_copy": "no",
                    "readonly": true,
                    "massupdate": false,
                    "full_text_search": {
                        "enabled": true,
                        "searchable": false
                    }
                },
                "date_modified": {
                    "name": "date_modified",
                    "vname": "LBL_DATE_MODIFIED",
                    "type": "datetime",
                    "group": "modified_by_name",
                    "comment": "Date record last modified",
                    "enable_range_search": true,
                    "full_text_search": {
                        "enabled": true,
                        "searchable": false,
                        "sortable": true
                    },
                    "studio": {
                        "portaleditview": false
                    },
                    "options": "date_range_search_dom",
                    "duplicate_on_record_copy": "no",
                    "readonly": true,
                    "massupdate": false
                },
                "modified_user_id": {
                    "name": "modified_user_id",
                    "rname": "user_name",
                    "id_name": "modified_user_id",
                    "vname": "LBL_MODIFIED",
                    "type": "assigned_user_name",
                    "table": "users",
                    "isnull": false,
                    "group": "modified_by_name",
                    "dbType": "id",
                    "reportable": true,
                    "comment": "User who last modified record",
                    "massupdate": false,
                    "duplicate_on_record_copy": "no",
                    "readonly": true,
                    "full_text_search": {
                        "enabled": true,
                        "searchable": false,
                        "type": "id",
                        "aggregations": {
                            "modified_user_id": {
                                "type": "MyItems",
                                "label": "LBL_AGG_MODIFIED_BY_ME"
                            }
                        }
                    },
                    "processes": {
                        "types": {
                            "RR": false,
                            "ALL": true
                        }
                    }
                },
                "modified_by_name": {
                    "name": "modified_by_name",
                    "vname": "LBL_MODIFIED",
                    "type": "relate",
                    "reportable": false,
                    "source": "non-db",
                    "rname": "full_name",
                    "table": "users",
                    "id_name": "modified_user_id",
                    "module": "Users",
                    "link": "modified_user_link",
                    "duplicate_merge": "disabled",
                    "massupdate": false,
                    "duplicate_on_record_copy": "no",
                    "readonly": true,
                    "sort_on": [
                        "last_name"
                    ],
                    "exportable": true
                },
                "created_by": {
                    "name": "created_by",
                    "rname": "user_name",
                    "id_name": "modified_user_id",
                    "vname": "LBL_CREATED",
                    "type": "assigned_user_name",
                    "table": "users",
                    "isnull": false,
                    "dbType": "id",
                    "group": "created_by_name",
                    "comment": "User who created record",
                    "massupdate": false,
                    "duplicate_on_record_copy": "no",
                    "readonly": true,
                    "full_text_search": {
                        "enabled": true,
                        "searchable": false,
                        "type": "id",
                        "aggregations": {
                            "created_by": {
                                "type": "MyItems",
                                "label": "LBL_AGG_CREATED_BY_ME"
                            }
                        }
                    },
                    "processes": {
                        "types": {
                            "RR": false,
                            "ALL": true
                        }
                    }
                },
                "created_by_name": {
                    "name": "created_by_name",
                    "vname": "LBL_CREATED",
                    "type": "relate",
                    "reportable": false,
                    "link": "created_by_link",
                    "rname": "full_name",
                    "source": "non-db",
                    "table": "users",
                    "id_name": "created_by",
                    "module": "Users",
                    "duplicate_merge": "disabled",
                    "importable": false,
                    "massupdate": false,
                    "duplicate_on_record_copy": "no",
                    "readonly": true,
                    "sort_on": [
                        "last_name"
                    ],
                    "exportable": true
                },
                "description": {
                    "name": "description",
                    "vname": "LBL_DESCRIPTION",
                    "type": "text",
                    "comment": "Full text of the note",
                    "full_text_search": {
                        "enabled": true,
                        "searchable": true,
                        "boost": 0.72
                    },
                    "rows": 6,
                    "cols": 80,
                    "duplicate_on_record_copy": "always"
                },
                "deleted": {
                    "name": "deleted",
                    "vname": "LBL_DELETED",
                    "type": "bool",
                    "default": false,
                    "reportable": false,
                    "duplicate_on_record_copy": "no",
                    "comment": "Record deletion indicator"
                },
                "created_by_link": {
                    "name": "created_by_link",
                    "type": "link",
                    "relationship": "accounts_created_by",
                    "vname": "LBL_CREATED_USER",
                    "link_type": "one",
                    "module": "Users",
                    "bean_name": "User",
                    "source": "non-db",
                    "side": "right"
                },
                "modified_user_link": {
                    "name": "modified_user_link",
                    "type": "link",
                    "relationship": "accounts_modified_user",
                    "vname": "LBL_MODIFIED_USER",
                    "link_type": "one",
                    "module": "Users",
                    "bean_name": "User",
                    "source": "non-db",
                    "side": "right"
                },
                "activities": {
                    "name": "activities",
                    "type": "link",
                    "relationship": "account_activities",
                    "vname": "LBL_ACTIVITY_STREAM",
                    "link_type": "many",
                    "module": "Activities",
                    "bean_name": "Activity",
                    "source": "non-db"
                },
                "facebook": {
                    "name": "facebook",
                    "vname": "LBL_FACEBOOK",
                    "type": "varchar",
                    "len": 100,
                    "duplicate_on_record_copy": "always",
                    "comment": "The facebook name of the company"
                },
                "twitter": {
                    "name": "twitter",
                    "vname": "LBL_TWITTER",
                    "type": "varchar",
                    "len": 100,
                    "duplicate_on_record_copy": "always",
                    "comment": "The twitter name of the company"
                },
                "googleplus": {
                    "name": "googleplus",
                    "vname": "LBL_GOOGLEPLUS",
                    "type": "varchar",
                    "len": 100,
                    "duplicate_on_record_copy": "always",
                    "comment": "The Google Plus name of the company"
                },
                "account_type": {
                    "name": "account_type",
                    "vname": "LBL_TYPE",
                    "type": "enum",
                    "options": "account_type_dom",
                    "len": 50,
                    "duplicate_on_record_copy": "always",
                    "comment": "The Company is of this type",
                    "massupdate": true
                },
                "industry": {
                    "name": "industry",
                    "vname": "LBL_INDUSTRY",
                    "type": "enum",
                    "options": "industry_dom",
                    "len": 50,
                    "duplicate_on_record_copy": "always",
                    "comment": "The company belongs in this industry",
                    "merge_filter": "enabled",
                    "massupdate": true
                },
                "annual_revenue": {
                    "name": "annual_revenue",
                    "vname": "LBL_ANNUAL_REVENUE",
                    "type": "varchar",
                    "len": 100,
                    "duplicate_on_record_copy": "always",
                    "comment": "Annual revenue for this company",
                    "merge_filter": "enabled"
                },
                "phone_fax": {
                    "name": "phone_fax",
                    "vname": "LBL_FAX",
                    "type": "phone",
                    "dbType": "varchar",
                    "len": 100,
                    "unified_search": true,
                    "duplicate_on_record_copy": "always",
                    "full_text_search": {
                        "enabled": true,
                        "searchable": true,
                        "boost": 1.04
                    },
                    "comment": "The fax phone number of this company"
                },
                "billing_address_street": {
                    "name": "billing_address_street",
                    "vname": "LBL_BILLING_ADDRESS_STREET",
                    "type": "text",
                    "dbType": "varchar",
                    "len": 150,
                    "comment": "The street address used for billing address",
                    "group": "billing_address",
                    "group_label": "LBL_BILLING_ADDRESS",
                    "merge_filter": "enabled",
                    "duplicate_on_record_copy": "always",
                    "full_text_search": {
                        "enabled": true,
                        "searchable": true,
                        "boost": 0.35
                    }
                },
                "billing_address_street_2": {
                    "name": "billing_address_street_2",
                    "vname": "LBL_BILLING_ADDRESS_STREET_2",
                    "type": "varchar",
                    "len": 150,
                    "source": "non-db",
                    "duplicate_on_record_copy": "always"
                },
                "billing_address_street_3": {
                    "name": "billing_address_street_3",
                    "vname": "LBL_BILLING_ADDRESS_STREET_3",
                    "type": "varchar",
                    "len": 150,
                    "source": "non-db",
                    "duplicate_on_record_copy": "always"
                },
                "billing_address_street_4": {
                    "name": "billing_address_street_4",
                    "vname": "LBL_BILLING_ADDRESS_STREET_4",
                    "type": "varchar",
                    "len": 150,
                    "source": "non-db",
                    "duplicate_on_record_copy": "always"
                },
                "billing_address_city": {
                    "name": "billing_address_city",
                    "vname": "LBL_BILLING_ADDRESS_CITY",
                    "type": "varchar",
                    "len": 100,
                    "comment": "The city used for billing address",
                    "group": "billing_address",
                    "merge_filter": "enabled",
                    "duplicate_on_record_copy": "always"
                },
                "billing_address_state": {
                    "name": "billing_address_state",
                    "vname": "LBL_BILLING_ADDRESS_STATE",
                    "type": "varchar",
                    "len": 100,
                    "group": "billing_address",
                    "comment": "The state used for billing address",
                    "merge_filter": "enabled",
                    "duplicate_on_record_copy": "always"
                },
                "billing_address_postalcode": {
                    "name": "billing_address_postalcode",
                    "vname": "LBL_BILLING_ADDRESS_POSTALCODE",
                    "type": "varchar",
                    "len": 20,
                    "group": "billing_address",
                    "comment": "The postal code used for billing address",
                    "merge_filter": "enabled",
                    "duplicate_on_record_copy": "always"
                },
                "billing_address_country": {
                    "name": "billing_address_country",
                    "vname": "LBL_BILLING_ADDRESS_COUNTRY",
                    "type": "varchar",
                    "group": "billing_address",
                    "comment": "The country used for the billing address",
                    "merge_filter": "enabled",
                    "duplicate_on_record_copy": "always"
                },
                "rating": {
                    "name": "rating",
                    "vname": "LBL_RATING",
                    "type": "varchar",
                    "len": 100,
                    "duplicate_on_record_copy": "always",
                    "comment": "An arbitrary rating for this company for use in comparisons with others"
                },
                "phone_office": {
                    "name": "phone_office",
                    "vname": "LBL_PHONE_OFFICE",
                    "type": "phone",
                    "dbType": "varchar",
                    "len": 100,
                    "audited": true,
                    "unified_search": true,
                    "duplicate_on_record_copy": "always",
                    "full_text_search": {
                        "enabled": true,
                        "searchable": true,
                        "boost": 1.05
                    },
                    "comment": "The office phone number",
                    "merge_filter": "enabled"
                },
                "phone_alternate": {
                    "name": "phone_alternate",
                    "vname": "LBL_PHONE_ALT",
                    "type": "phone",
                    "group": "phone_office",
                    "dbType": "varchar",
                    "len": 100,
                    "unified_search": true,
                    "duplicate_on_record_copy": "always",
                    "full_text_search": {
                        "enabled": true,
                        "searchable": true,
                        "boost": 1.03
                    },
                    "comment": "An alternate phone number",
                    "merge_filter": "enabled"
                },
                "website": {
                    "name": "website",
                    "vname": "LBL_WEBSITE",
                    "type": "url",
                    "dbType": "varchar",
                    "len": 255,
                    "duplicate_on_record_copy": "always",
                    "comment": "URL of website for the company"
                },
                "ownership": {
                    "name": "ownership",
                    "vname": "LBL_OWNERSHIP",
                    "type": "varchar",
                    "len": 100,
                    "duplicate_on_record_copy": "always",
                    "comment": ""
                },
                "employees": {
                    "name": "employees",
                    "vname": "LBL_EMPLOYEES",
                    "type": "varchar",
                    "len": 10,
                    "duplicate_on_record_copy": "always",
                    "comment": "Number of employees, varchar to accomodate for both number (100) or range (50-100)"
                },
                "ticker_symbol": {
                    "name": "ticker_symbol",
                    "vname": "LBL_TICKER_SYMBOL",
                    "type": "varchar",
                    "len": 10,
                    "duplicate_on_record_copy": "always",
                    "comment": "The stock trading (ticker) symbol for the company",
                    "merge_filter": "enabled"
                },
                "shipping_address_street": {
                    "name": "shipping_address_street",
                    "vname": "LBL_SHIPPING_ADDRESS_STREET",
                    "type": "text",
                    "dbType": "varchar",
                    "len": 150,
                    "group": "shipping_address",
                    "group_label": "LBL_SHIPPING_ADDRESS",
                    "duplicate_on_record_copy": "always",
                    "full_text_search": {
                        "enabled": true,
                        "searchable": true,
                        "boost": 0.34
                    },
                    "comment": "The street address used for for shipping purposes",
                    "merge_filter": "enabled"
                },
                "shipping_address_street_2": {
                    "name": "shipping_address_street_2",
                    "vname": "LBL_SHIPPING_ADDRESS_STREET_2",
                    "type": "varchar",
                    "len": 150,
                    "duplicate_on_record_copy": "always",
                    "source": "non-db"
                },
                "shipping_address_street_3": {
                    "name": "shipping_address_street_3",
                    "vname": "LBL_SHIPPING_ADDRESS_STREET_3",
                    "type": "varchar",
                    "len": 150,
                    "duplicate_on_record_copy": "always",
                    "source": "non-db"
                },
                "shipping_address_street_4": {
                    "name": "shipping_address_street_4",
                    "vname": "LBL_SHIPPING_ADDRESS_STREET_4",
                    "type": "varchar",
                    "len": 150,
                    "duplicate_on_record_copy": "always",
                    "source": "non-db"
                },
                "shipping_address_city": {
                    "name": "shipping_address_city",
                    "vname": "LBL_SHIPPING_ADDRESS_CITY",
                    "type": "varchar",
                    "len": 100,
                    "group": "shipping_address",
                    "duplicate_on_record_copy": "always",
                    "comment": "The city used for the shipping address",
                    "merge_filter": "enabled"
                },
                "shipping_address_state": {
                    "name": "shipping_address_state",
                    "vname": "LBL_SHIPPING_ADDRESS_STATE",
                    "type": "varchar",
                    "len": 100,
                    "group": "shipping_address",
                    "duplicate_on_record_copy": "always",
                    "comment": "The state used for the shipping address",
                    "merge_filter": "enabled"
                },
                "shipping_address_postalcode": {
                    "name": "shipping_address_postalcode",
                    "vname": "LBL_SHIPPING_ADDRESS_POSTALCODE",
                    "type": "varchar",
                    "len": 20,
                    "group": "shipping_address",
                    "duplicate_on_record_copy": "always",
                    "comment": "The zip code used for the shipping address",
                    "merge_filter": "enabled"
                },
                "shipping_address_country": {
                    "name": "shipping_address_country",
                    "vname": "LBL_SHIPPING_ADDRESS_COUNTRY",
                    "type": "varchar",
                    "group": "shipping_address",
                    "duplicate_on_record_copy": "always",
                    "comment": "The country used for the shipping address",
                    "merge_filter": "enabled"
                },
                "parent_id": {
                    "name": "parent_id",
                    "vname": "LBL_PARENT_ACCOUNT_ID",
                    "type": "id",
                    "required": false,
                    "reportable": false,
                    "audited": true,
                    "comment": "Account ID of the parent of this account"
                },
                "sic_code": {
                    "name": "sic_code",
                    "vname": "LBL_SIC_CODE",
                    "type": "varchar",
                    "len": 10,
                    "full_text_search": {
                        "enabled": true,
                        "searchable": true,
                        "boost": 1.21,
                        "type": "exact"
                    },
                    "comment": "SIC code of the account",
                    "merge_filter": "enabled"
                },
                "duns_num": {
                    "name": "duns_num",
                    "vname": "LBL_DUNS_NUM",
                    "type": "varchar",
                    "len": 15,
                    "full_text_search": {
                        "enabled": true,
                        "searchable": true,
                        "boost": 1.23,
                        "type": "exact"
                    },
                    "comment": "DUNS number of the account"
                },
                "parent_name": {
                    "name": "parent_name",
                    "rname": "name",
                    "id_name": "parent_id",
                    "vname": "LBL_MEMBER_OF",
                    "type": "relate",
                    "isnull": "true",
                    "module": "Accounts",
                    "table": "accounts",
                    "massupdate": false,
                    "source": "non-db",
                    "link": "member_of",
                    "unified_search": true,
                    "importable": "true"
                },
                "members": {
                    "name": "members",
                    "type": "link",
                    "relationship": "member_accounts",
                    "module": "Accounts",
                    "bean_name": "Account",
                    "source": "non-db",
                    "vname": "LBL_MEMBERS"
                },
                "member_of": {
                    "name": "member_of",
                    "type": "link",
                    "relationship": "member_accounts",
                    "module": "Accounts",
                    "bean_name": "Account",
                    "link_type": "one",
                    "source": "non-db",
                    "vname": "LBL_MEMBER_OF",
                    "side": "right"
                },
                "cases": {
                    "name": "cases",
                    "type": "link",
                    "relationship": "account_cases",
                    "module": "Cases",
                    "bean_name": "aCase",
                    "source": "non-db",
                    "vname": "LBL_CASES"
                },
                "tasks": {
                    "name": "tasks",
                    "type": "link",
                    "relationship": "account_tasks",
                    "module": "Tasks",
                    "bean_name": "Task",
                    "source": "non-db",
                    "vname": "LBL_TASKS"
                },
                "notes": {
                    "name": "notes",
                    "type": "link",
                    "relationship": "account_notes",
                    "module": "Notes",
                    "bean_name": "Note",
                    "source": "non-db",
                    "vname": "LBL_NOTES"
                },
                "meetings": {
                    "name": "meetings",
                    "type": "link",
                    "relationship": "account_meetings",
                    "module": "Meetings",
                    "bean_name": "Meeting",
                    "source": "non-db",
                    "vname": "LBL_MEETINGS"
                },
                "calls": {
                    "name": "calls",
                    "type": "link",
                    "relationship": "account_calls",
                    "module": "Calls",
                    "bean_name": "Call",
                    "source": "non-db",
                    "vname": "LBL_CALLS"
                },
                "emails": {
                    "name": "emails",
                    "type": "link",
                    "relationship": "emails_accounts_rel",
                    "module": "Emails",
                    "bean_name": "Email",
                    "source": "non-db",
                    "vname": "LBL_EMAILS",
                    "studio": {
                        "formula": false
                    }
                },
                "archived_emails": {
                    "name": "archived_emails",
                    "type": "link",
                    "link_file": "modules/Emails/ArchivedEmailsBeanLink.php",
                    "link_class": "ArchivedEmailsBeanLink",
                    "link": "contacts",
                    "source": "non-db",
                    "vname": "LBL_EMAILS",
                    "module": "Emails",
                    "link_type": "many",
                    "relationship": "",
                    "hideacl": true,
                    "readonly": true,
                    "massupdate": false
                },
                "documents": {
                    "name": "documents",
                    "type": "link",
                    "relationship": "documents_accounts",
                    "source": "non-db",
                    "vname": "LBL_DOCUMENTS_SUBPANEL_TITLE"
                },
                "bugs": {
                    "name": "bugs",
                    "type": "link",
                    "relationship": "accounts_bugs",
                    "module": "Bugs",
                    "bean_name": "Bug",
                    "source": "non-db",
                    "vname": "LBL_BUGS"
                },
                "contacts": {
                    "name": "contacts",
                    "type": "link",
                    "relationship": "accounts_contacts",
                    "module": "Contacts",
                    "bean_name": "Contact",
                    "source": "non-db",
                    "vname": "LBL_CONTACTS"
                },
                "opportunities": {
                    "name": "opportunities",
                    "type": "link",
                    "relationship": "accounts_opportunities",
                    "module": "Opportunities",
                    "bean_name": "Opportunity",
                    "source": "non-db",
                    "vname": "LBL_OPPORTUNITY"
                },
                "quotes": {
                    "name": "quotes",
                    "type": "link",
                    "relationship": "quotes_billto_accounts",
                    "source": "non-db",
                    "module": "Quotes",
                    "bean_name": "Quote",
                    "ignore_role": true,
                    "vname": "LBL_QUOTES"
                },
                "quotes_shipto": {
                    "name": "quotes_shipto",
                    "type": "link",
                    "relationship": "quotes_shipto_accounts",
                    "module": "Quotes",
                    "bean_name": "Quote",
                    "source": "non-db",
                    "vname": "LBL_QUOTES_SHIP_TO"
                },
                "project": {
                    "name": "project",
                    "type": "link",
                    "relationship": "projects_accounts",
                    "module": "Project",
                    "bean_name": "Project",
                    "source": "non-db",
                    "vname": "LBL_PROJECTS"
                },
                "leads": {
                    "name": "leads",
                    "type": "link",
                    "relationship": "account_leads",
                    "module": "Leads",
                    "bean_name": "Lead",
                    "source": "non-db",
                    "vname": "LBL_LEADS",
                    "populate_list": {
                        "name": "account_name",
                        "phone_office": "phone_work"
                    }
                },
                "campaigns": {
                    "name": "campaigns",
                    "type": "link",
                    "relationship": "account_campaign_log",
                    "module": "CampaignLog",
                    "bean_name": "CampaignLog",
                    "source": "non-db",
                    "vname": "LBL_CAMPAIGNLOG",
                    "studio": {
                        "formula": false
                    }
                },
                "campaign_accounts": {
                    "name": "campaign_accounts",
                    "type": "link",
                    "vname": "LBL_CAMPAIGNS",
                    "relationship": "campaign_accounts",
                    "source": "non-db"
                },
                "revenuelineitems": {
                    "name": "revenuelineitems",
                    "type": "link",
                    "relationship": "revenuelineitems_accounts",
                    "vname": "LBL_REVENUELINEITEMS",
                    "module": "RevenueLineItems",
                    "bean_name": "RevenueLineItem",
                    "source": "non-db",
                    "workflow": false
                },
                "forecastworksheets": {
                    "name": "forecastworksheets",
                    "type": "link",
                    "relationship": "forecastworksheets_accounts",
                    "vname": "LBL_FORECAST_WORKSHEET",
                    "module": "ForecastWorksheets",
                    "bean_name": "ForecastWorksheet",
                    "source": "non-db"
                },
                "products": {
                    "name": "products",
                    "type": "link",
                    "link_file": "modules/Products/AccountLink.php",
                    "link_class": "AccountLink",
                    "relationship": "products_accounts",
                    "source": "non-db",
                    "vname": "LBL_PRODUCTS"
                },
                "contracts": {
                    "name": "contracts",
                    "type": "link",
                    "relationship": "account_contracts",
                    "source": "non-db",
                    "vname": "LBL_CONTRACTS"
                },
                "dataprivacy": {
                    "name": "dataprivacy",
                    "type": "link",
                    "relationship": "accounts_dataprivacy",
                    "source": "non-db",
                    "vname": "LBL_DATAPRIVACY"
                },
                "campaign_id": {
                    "name": "campaign_id",
                    "comment": "Campaign that generated Account",
                    "vname": "LBL_CAMPAIGN_ID",
                    "rname": "id",
                    "id_name": "campaign_id",
                    "type": "id",
                    "table": "campaigns",
                    "isnull": "true",
                    "module": "Campaigns",
                    "reportable": false,
                    "massupdate": false,
                    "duplicate_merge": "disabled"
                },
                "campaign_name": {
                    "name": "campaign_name",
                    "rname": "name",
                    "vname": "LBL_CAMPAIGN",
                    "type": "relate",
                    "reportable": false,
                    "source": "non-db",
                    "table": "campaigns",
                    "id_name": "campaign_id",
                    "link": "campaign_accounts",
                    "module": "Campaigns",
                    "duplicate_merge": "disabled",
                    "comment": "The first campaign name for Account (Meta-data only)",
                    "massupdate": true
                },
                "prospect_lists": {
                    "name": "prospect_lists",
                    "type": "link",
                    "relationship": "prospect_list_accounts",
                    "module": "ProspectLists",
                    "source": "non-db",
                    "vname": "LBL_PROSPECT_LIST"
                },
                "following": {
                    "massupdate": false,
                    "name": "following",
                    "vname": "LBL_FOLLOWING",
                    "type": "bool",
                    "source": "non-db",
                    "comment": "Is user following this record",
                    "studio": "false",
                    "link": "following_link",
                    "rname": "id",
                    "rname_exists": true
                },
                "following_link": {
                    "name": "following_link",
                    "type": "link",
                    "relationship": "accounts_following",
                    "source": "non-db",
                    "vname": "LBL_FOLLOWING",
                    "reportable": false
                },
                "my_favorite": {
                    "massupdate": false,
                    "name": "my_favorite",
                    "vname": "LBL_FAVORITE",
                    "type": "bool",
                    "source": "non-db",
                    "comment": "Favorite for the user",
                    "studio": {
                        "list": false,
                        "recordview": false,
                        "basic_search": false,
                        "advanced_search": false
                    },
                    "link": "favorite_link",
                    "rname": "id",
                    "rname_exists": true
                },
                "favorite_link": {
                    "name": "favorite_link",
                    "type": "link",
                    "relationship": "accounts_favorite",
                    "source": "non-db",
                    "vname": "LBL_FAVORITE",
                    "reportable": false,
                    "workflow": false,
                    "full_text_search": {
                        "type": "favorites",
                        "enabled": true,
                        "searchable": false,
                        "aggregations": {
                            "favorite_link": {
                                "type": "MyItems",
                                "options": {
                                    "field": "user_favorites"
                                }
                            }
                        }
                    }
                },
                "tag": {
                    "name": "tag",
                    "vname": "LBL_TAGS",
                    "type": "tag",
                    "link": "tag_link",
                    "source": "non-db",
                    "module": "Tags",
                    "relate_collection": true,
                    "studio": {
                        "portal": false,
                        "base": {
                            "popuplist": false
                        },
                        "mobile": {
                            "wirelesseditview": true,
                            "wirelessdetailview": true
                        }
                    },
                    "massupdate": true,
                    "exportable": true,
                    "sortable": false,
                    "rname": "name",
                    "full_text_search": {
                        "enabled": true,
                        "searchable": false
                    }
                },
                "tag_link": {
                    "name": "tag_link",
                    "type": "link",
                    "vname": "LBL_TAGS_LINK",
                    "relationship": "accounts_tags",
                    "source": "non-db",
                    "exportable": false,
                    "duplicate_merge": "disabled"
                },
                "assigned_user_id": {
                    "name": "assigned_user_id",
                    "vname": "LBL_ASSIGNED_TO_ID",
                    "group": "assigned_user_name",
                    "type": "id",
                    "reportable": false,
                    "isnull": "false",
                    "audited": true,
                    "duplicate_on_record_copy": "always",
                    "comment": "User ID assigned to record",
                    "duplicate_merge": "disabled",
                    "mandatory_fetch": true,
                    "massupdate": false,
                    "full_text_search": {
                        "enabled": true,
                        "searchable": false,
                        "aggregations": {
                            "assigned_user_id": {
                                "type": "MyItems",
                                "label": "LBL_AGG_ASSIGNED_TO_ME"
                            }
                        }
                    }
                },
                "assigned_user_name": {
                    "name": "assigned_user_name",
                    "link": "assigned_user_link",
                    "vname": "LBL_ASSIGNED_TO",
                    "rname": "full_name",
                    "type": "relate",
                    "reportable": false,
                    "source": "non-db",
                    "table": "users",
                    "id_name": "assigned_user_id",
                    "module": "Users",
                    "duplicate_merge": "disabled",
                    "duplicate_on_record_copy": "always",
                    "sort_on": [
                        "last_name"
                    ],
                    "exportable": true,
                    "massupdate": true
                },
                "assigned_user_link": {
                    "name": "assigned_user_link",
                    "type": "link",
                    "relationship": "accounts_assigned_user",
                    "vname": "LBL_ASSIGNED_TO_USER",
                    "link_type": "one",
                    "module": "Users",
                    "bean_name": "User",
                    "source": "non-db",
                    "duplicate_merge": "enabled",
                    "id_name": "assigned_user_id",
                    "table": "users",
                    "side": "right"
                },
                "team_id": {
                    "name": "team_id",
                    "vname": "LBL_TEAM_ID",
                    "group": "team_name",
                    "reportable": false,
                    "dbType": "id",
                    "type": "team_list",
                    "audited": true,
                    "duplicate_on_record_copy": "always",
                    "comment": "Team ID for the account"
                },
                "team_set_id": {
                    "name": "team_set_id",
                    "rname": "id",
                    "id_name": "team_set_id",
                    "vname": "LBL_TEAM_SET_ID",
                    "type": "id",
                    "audited": true,
                    "studio": "false",
                    "dbType": "id",
                    "duplicate_on_record_copy": "always"
                },
                "team_count": {
                    "name": "team_count",
                    "rname": "team_count",
                    "id_name": "team_id",
                    "vname": "LBL_TEAMS",
                    "join_name": "ts1",
                    "table": "teams",
                    "type": "relate",
                    "required": true,
                    "isnull": "true",
                    "module": "Teams",
                    "link": "team_count_link",
                    "massupdate": false,
                    "dbType": "int",
                    "source": "non-db",
                    "importable": "false",
                    "reportable": false,
                    "duplicate_merge": "disabled",
                    "duplicate_on_record_copy": "always",
                    "studio": "false",
                    "hideacl": true
                },
                "team_name": {
                    "name": "team_name",
                    "db_concat_fields": [
                        "name",
                        "name_2"
                    ],
                    "sort_on": "tj.name",
                    "join_name": "tj",
                    "rname": "name",
                    "id_name": "team_id",
                    "vname": "LBL_TEAMS",
                    "type": "relate",
                    "required": true,
                    "table": "teams",
                    "isnull": "true",
                    "module": "Teams",
                    "link": "team_link",
                    "massupdate": true,
                    "dbType": "varchar",
                    "source": "non-db",
                    "len": 36,
                    "custom_type": "teamset",
                    "studio": {
                        "portallistview": false,
                        "portalrecordview": false
                    },
                    "duplicate_on_record_copy": "always",
                    "exportable": true
                },
                "team_link": {
                    "name": "team_link",
                    "type": "link",
                    "relationship": "accounts_team",
                    "vname": "LBL_TEAMS_LINK",
                    "link_type": "one",
                    "module": "Teams",
                    "bean_name": "Team",
                    "source": "non-db",
                    "duplicate_merge": "disabled",
                    "studio": "false",
                    "side": "right"
                },
                "team_count_link": {
                    "name": "team_count_link",
                    "type": "link",
                    "relationship": "accounts_team_count_relationship",
                    "link_type": "one",
                    "module": "Teams",
                    "bean_name": "TeamSet",
                    "source": "non-db",
                    "duplicate_merge": "disabled",
                    "reportable": false,
                    "studio": "false",
                    "side": "right"
                },
                "teams": {
                    "name": "teams",
                    "type": "link",
                    "relationship": "accounts_teams",
                    "bean_filter_field": "team_set_id",
                    "rhs_key_override": true,
                    "source": "non-db",
                    "vname": "LBL_TEAMS",
                    "link_class": "TeamSetLink",
                    "link_file": "modules/Teams/TeamSetLink.php",
                    "studio": "false",
                    "reportable": false,
                    "side": "left"
                },
                "email": {
                    "name": "email",
                    "type": "email",
                    "query_type": "default",
                    "source": "non-db",
                    "operator": "subquery",
                    "subquery": "SELECT eabr.bean_id FROM email_addr_bean_rel eabr JOIN email_addresses ea ON (ea.id = eabr.email_address_id) WHERE eabr.deleted=0 AND ea.email_address LIKE",
                    "db_field": [
                        "id"
                    ],
                    "vname": "LBL_EMAIL_ADDRESS",
                    "studio": {
                        "visible": true,
                        "searchview": true,
                        "editview": true,
                        "editField": true
                    },
                    "duplicate_on_record_copy": "always",
                    "len": 100,
                    "link": "email_addresses_primary",
                    "rname": "email_address",
                    "module": "EmailAddresses",
                    "full_text_search": {
                        "enabled": true,
                        "searchable": true,
                        "boost": 1.89
                    },
                    "audited": true,
                    "pii": true
                },
                "email1": {
                    "name": "email1",
                    "vname": "LBL_EMAIL_ADDRESS",
                    "type": "varchar",
                    "function": {
                        "name": "getEmailAddressWidget",
                        "returns": "html"
                    },
                    "source": "non-db",
                    "link": "email_addresses_primary",
                    "rname": "email_address",
                    "group": "email1",
                    "merge_filter": "enabled",
                    "module": "EmailAddresses",
                    "studio": false,
                    "duplicate_on_record_copy": "always",
                    "importable": false
                },
                "email2": {
                    "name": "email2",
                    "vname": "LBL_OTHER_EMAIL_ADDRESS",
                    "type": "varchar",
                    "function": {
                        "name": "getEmailAddressWidget",
                        "returns": "html"
                    },
                    "source": "non-db",
                    "group": "email2",
                    "merge_filter": "enabled",
                    "studio": "false",
                    "duplicate_on_record_copy": "always",
                    "importable": false,
                    "workflow": false
                },
                "invalid_email": {
                    "name": "invalid_email",
                    "vname": "LBL_INVALID_EMAIL",
                    "source": "non-db",
                    "type": "bool",
                    "link": "email_addresses_primary",
                    "rname": "invalid_email",
                    "massupdate": false,
                    "studio": "false",
                    "duplicate_on_record_copy": "always"
                },
                "email_opt_out": {
                    "name": "email_opt_out",
                    "vname": "LBL_EMAIL_OPT_OUT",
                    "source": "non-db",
                    "type": "bool",
                    "link": "email_addresses_primary",
                    "rname": "opt_out",
                    "massupdate": false,
                    "studio": "false",
                    "duplicate_on_record_copy": "always"
                },
                "email_addresses_primary": {
                    "name": "email_addresses_primary",
                    "type": "link",
                    "relationship": "accounts_email_addresses_primary",
                    "source": "non-db",
                    "vname": "LBL_EMAIL_ADDRESS_PRIMARY",
                    "duplicate_merge": "disabled",
                    "primary_only": true
                },
                "email_addresses": {
                    "name": "email_addresses",
                    "type": "link",
                    "relationship": "accounts_email_addresses",
                    "source": "non-db",
                    "vname": "LBL_EMAIL_ADDRESSES",
                    "reportable": false,
                    "unified_search": true,
                    "rel_fields": {
                        "primary_address": {
                            "type": "bool"
                        }
                    }
                },
                "email_addresses_non_primary": {
                    "name": "email_addresses_non_primary",
                    "type": "varchar",
                    "source": "non-db",
                    "vname": "LBL_EMAIL_NON_PRIMARY",
                    "studio": false,
                    "reportable": false,
                    "massupdate": false
                },
                "_hash": "b74874a38ca38d4150fbdfb8e94d746e"
            },
            "nameFormat": [],
            "views": {
                "record": {
                    "meta": {
                        "buttons": [
                            {
                                "type": "button",
                                "name": "cancel_button",
                                "label": "LBL_CANCEL_BUTTON_LABEL",
                                "css_class": "btn-invisible btn-link",
                                "showOn": "edit",
                                "events": {
                                    "click": "button:cancel_button:click"
                                }
                            },
                            {
                                "type": "rowaction",
                                "event": "button:save_button:click",
                                "name": "save_button",
                                "label": "LBL_SAVE_BUTTON_LABEL",
                                "css_class": "btn btn-primary",
                                "showOn": "edit",
                                "acl_action": "edit"
                            },
                            {
                                "type": "actiondropdown",
                                "name": "main_dropdown",
                                "primary": true,
                                "showOn": "view",
                                "buttons": [
                                    {
                                        "type": "rowaction",
                                        "event": "button:edit_button:click",
                                        "name": "edit_button",
                                        "label": "LBL_EDIT_BUTTON_LABEL",
                                        "acl_action": "edit"
                                    },
                                    {
                                        "type": "shareaction",
                                        "name": "share",
                                        "label": "LBL_RECORD_SHARE_BUTTON",
                                        "acl_action": "view"
                                    },
                                    {
                                        "type": "pdfaction",
                                        "name": "download-pdf",
                                        "label": "LBL_PDF_VIEW",
                                        "action": "download",
                                        "acl_action": "view"
                                    },
                                    {
                                        "type": "pdfaction",
                                        "name": "email-pdf",
                                        "label": "LBL_PDF_EMAIL",
                                        "action": "email",
                                        "acl_action": "view"
                                    },
                                    {
                                        "type": "divider"
                                    },
                                    {
                                        "type": "rowaction",
                                        "event": "button:find_duplicates_button:click",
                                        "name": "find_duplicates_button",
                                        "label": "LBL_DUP_MERGE",
                                        "acl_action": "edit"
                                    },
                                    {
                                        "type": "rowaction",
                                        "event": "button:duplicate_button:click",
                                        "name": "duplicate_button",
                                        "label": "LBL_DUPLICATE_BUTTON_LABEL",
                                        "acl_module": "Accounts",
                                        "acl_action": "create"
                                    },
                                    {
                                        "type": "rowaction",
                                        "event": "button:historical_summary_button:click",
                                        "name": "historical_summary_button",
                                        "label": "LBL_HISTORICAL_SUMMARY",
                                        "acl_action": "view"
                                    },
                                    {
                                        "type": "rowaction",
                                        "event": "button:audit_button:click",
                                        "name": "audit_button",
                                        "label": "LNK_VIEW_CHANGE_LOG",
                                        "acl_action": "view"
                                    },
                                    {
                                        "type": "divider"
                                    },
                                    {
                                        "type": "rowaction",
                                        "event": "button:delete_button:click",
                                        "name": "delete_button",
                                        "label": "LBL_DELETE_BUTTON_LABEL",
                                        "acl_action": "delete"
                                    }
                                ]
                            },
                            {
                                "name": "sidebar_toggle",
                                "type": "sidebartoggle"
                            }
                        ],
                        "panels": [
                            {
                                "name": "panel_header",
                                "label": "LBL_PANEL_HEADER",
                                "header": true,
                                "fields": [
                                    {
                                        "name": "picture",
                                        "type": "avatar",
                                        "size": "large",
                                        "dismiss_label": true,
                                        "readonly": true
                                    },
                                    {
                                        "name": "name"
                                    },
                                    {
                                        "name": "favorite",
                                        "label": "LBL_FAVORITE",
                                        "type": "favorite",
                                        "dismiss_label": true
                                    },
                                    {
                                        "name": "follow",
                                        "label": "LBL_FOLLOW",
                                        "type": "follow",
                                        "readonly": true,
                                        "dismiss_label": true
                                    }
                                ]
                            },
                            {
                                "name": "panel_body",
                                "label": "LBL_RECORD_BODY",
                                "columns": 2,
                                "labelsOnTop": true,
                                "placeholders": true,
                                "fields": [
                                    "website",
                                    "industry",
                                    "parent_name",
                                    "account_type",
                                    "assigned_user_name",
                                    "phone_office",
                                    {
                                        "name": "tag",
                                        "span": 12
                                    }
                                ]
                            },
                            {
                                "name": "panel_hidden",
                                "label": "LBL_RECORD_SHOWMORE",
                                "hide": true,
                                "columns": 2,
                                "labelsOnTop": true,
                                "placeholders": true,
                                "fields": [
                                    {
                                        "name": "billing_address",
                                        "type": "fieldset",
                                        "css_class": "address",
                                        "label": "LBL_BILLING_ADDRESS",
                                        "fields": [
                                            {
                                                "name": "billing_address_street",
                                                "css_class": "address_street",
                                                "placeholder": "LBL_BILLING_ADDRESS_STREET"
                                            },
                                            {
                                                "name": "billing_address_city",
                                                "css_class": "address_city",
                                                "placeholder": "LBL_BILLING_ADDRESS_CITY"
                                            },
                                            {
                                                "name": "billing_address_state",
                                                "css_class": "address_state",
                                                "placeholder": "LBL_BILLING_ADDRESS_STATE"
                                            },
                                            {
                                                "name": "billing_address_postalcode",
                                                "css_class": "address_zip",
                                                "placeholder": "LBL_BILLING_ADDRESS_POSTALCODE"
                                            },
                                            {
                                                "name": "billing_address_country",
                                                "css_class": "address_country",
                                                "placeholder": "LBL_BILLING_ADDRESS_COUNTRY"
                                            }
                                        ]
                                    },
                                    {
                                        "name": "shipping_address",
                                        "type": "fieldset",
                                        "css_class": "address",
                                        "label": "LBL_SHIPPING_ADDRESS",
                                        "fields": [
                                            {
                                                "name": "shipping_address_street",
                                                "css_class": "address_street",
                                                "placeholder": "LBL_SHIPPING_ADDRESS_STREET"
                                            },
                                            {
                                                "name": "shipping_address_city",
                                                "css_class": "address_city",
                                                "placeholder": "LBL_SHIPPING_ADDRESS_CITY"
                                            },
                                            {
                                                "name": "shipping_address_state",
                                                "css_class": "address_state",
                                                "placeholder": "LBL_SHIPPING_ADDRESS_STATE"
                                            },
                                            {
                                                "name": "shipping_address_postalcode",
                                                "css_class": "address_zip",
                                                "placeholder": "LBL_SHIPPING_ADDRESS_POSTALCODE"
                                            },
                                            {
                                                "name": "shipping_address_country",
                                                "css_class": "address_country",
                                                "placeholder": "LBL_SHIPPING_ADDRESS_COUNTRY"
                                            },
                                            {
                                                "name": "copy",
                                                "label": "NTC_COPY_BILLING_ADDRESS",
                                                "type": "copy",
                                                "mapping": {
                                                    "billing_address_street": "shipping_address_street",
                                                    "billing_address_city": "shipping_address_city",
                                                    "billing_address_state": "shipping_address_state",
                                                    "billing_address_postalcode": "shipping_address_postalcode",
                                                    "billing_address_country": "shipping_address_country"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "name": "phone_alternate",
                                        "label": "LBL_PHONE_ALT"
                                    },
                                    "email",
                                    "phone_fax",
                                    "campaign_name",
                                    "twitter",
                                    {
                                        "name": "description",
                                        "span": 12
                                    },
                                    "sic_code",
                                    "ticker_symbol",
                                    "annual_revenue",
                                    "employees",
                                    "ownership",
                                    "rating",
                                    {
                                        "name": "duns_num",
                                        "readonly": true
                                    },
                                    {
                                        "name": "date_entered_by",
                                        "readonly": true,
                                        "inline": true,
                                        "type": "fieldset",
                                        "label": "LBL_DATE_ENTERED",
                                        "fields": [
                                            {
                                                "name": "date_entered"
                                            },
                                            {
                                                "type": "label",
                                                "default_value": "LBL_BY"
                                            },
                                            {
                                                "name": "created_by_name"
                                            }
                                        ]
                                    },
                                    "team_name",
                                    {
                                        "name": "date_modified_by",
                                        "readonly": true,
                                        "inline": true,
                                        "type": "fieldset",
                                        "label": "LBL_DATE_MODIFIED",
                                        "fields": [
                                            {
                                                "name": "date_modified"
                                            },
                                            {
                                                "type": "label",
                                                "default_value": "LBL_BY"
                                            },
                                            {
                                                "name": "modified_by_name"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
                "resolve-conflicts-list": {
                    "meta": {
                        "panels": [
                            {
                                "name": "panel_header",
                                "label": "LBL_PANEL_1",
                                "fields": [
                                    {
                                        "name": "name",
                                        "link": true,
                                        "label": "LBL_LIST_ACCOUNT_NAME",
                                        "enabled": true,
                                        "default": true
                                    },
                                    {
                                        "name": "billing_address_city",
                                        "label": "LBL_LIST_CITY",
                                        "enabled": true,
                                        "default": true
                                    },
                                    {
                                        "name": "billing_address_country",
                                        "label": "LBL_BILLING_ADDRESS_COUNTRY",
                                        "enabled": true,
                                        "default": true
                                    },
                                    {
                                        "name": "phone_office",
                                        "label": "LBL_LIST_PHONE",
                                        "enabled": true,
                                        "default": true
                                    },
                                    {
                                        "name": "assigned_user_name",
                                        "label": "LBL_LIST_ASSIGNED_USER",
                                        "id": "ASSIGNED_USER_ID",
                                        "enabled": true,
                                        "default": false
                                    },
                                    {
                                        "name": "email",
                                        "label": "LBL_EMAIL_ADDRESS",
                                        "enabled": true,
                                        "default": false
                                    },
                                    {
                                        "name": "date_entered",
                                        "type": "datetime",
                                        "label": "LBL_DATE_ENTERED",
                                        "enabled": true,
                                        "default": false,
                                        "readonly": true
                                    }
                                ]
                            }
                        ]
                    }
                },
                "subpanel-list": {
                    "meta": {
                        "panels": [
                            {
                                "name": "panel_header",
                                "label": "LBL_PANEL_1",
                                "fields": [
                                    {
                                        "default": true,
                                        "label": "LBL_LIST_ACCOUNT_NAME",
                                        "enabled": true,
                                        "name": "name",
                                        "link": true
                                    },
                                    {
                                        "default": true,
                                        "label": "LBL_LIST_CITY",
                                        "enabled": true,
                                        "name": "billing_address_city"
                                    },
                                    {
                                        "type": "varchar",
                                        "default": true,
                                        "label": "LBL_BILLING_ADDRESS_COUNTRY",
                                        "enabled": true,
                                        "name": "billing_address_country"
                                    },
                                    {
                                        "default": true,
                                        "label": "LBL_LIST_PHONE",
                                        "enabled": true,
                                        "name": "phone_office"
                                    }
                                ]
                            }
                        ]
                    }
                },
                "selection-list": {
                    "meta": {
                        "panels": [
                            {
                                "name": "panel_header",
                                "label": "LBL_PANEL_1",
                                "fields": [
                                    {
                                        "name": "name",
                                        "link": true,
                                        "label": "LBL_LIST_ACCOUNT_NAME",
                                        "enabled": true,
                                        "default": true
                                    },
                                    {
                                        "name": "billing_address_city",
                                        "label": "LBL_LIST_CITY",
                                        "enabled": true,
                                        "default": true
                                    },
                                    {
                                        "name": "billing_address_country",
                                        "label": "LBL_BILLING_ADDRESS_COUNTRY",
                                        "enabled": true,
                                        "default": true
                                    },
                                    {
                                        "name": "phone_office",
                                        "label": "LBL_LIST_PHONE",
                                        "enabled": true,
                                        "default": true
                                    },
                                    {
                                        "name": "assigned_user_name",
                                        "label": "LBL_LIST_ASSIGNED_USER",
                                        "id": "ASSIGNED_USER_ID",
                                        "enabled": true,
                                        "default": false
                                    },
                                    {
                                        "name": "email",
                                        "label": "LBL_EMAIL_ADDRESS",
                                        "enabled": true,
                                        "default": false
                                    },
                                    {
                                        "name": "date_entered",
                                        "type": "datetime",
                                        "label": "LBL_DATE_ENTERED",
                                        "enabled": true,
                                        "default": false,
                                        "readonly": true
                                    }
                                ]
                            }
                        ]
                    }
                },
                "panel-top-for-prospectlists": {
                    "meta": {
                        "type": "panel-top",
                        "template": "panel-top",
                        "buttons": [
                            {
                                "type": "actiondropdown",
                                "name": "panel_dropdown",
                                "css_class": "pull-right",
                                "buttons": [
                                    {
                                        "type": "sticky-rowaction",
                                        "icon": "fa-plus",
                                        "name": "create_button",
                                        "label": " ",
                                        "acl_action": "create",
                                        "tooltip": "LBL_CREATE_BUTTON_LABEL"
                                    },
                                    {
                                        "type": "link-action",
                                        "name": "select_button",
                                        "label": "LBL_ASSOC_RELATED_RECORD"
                                    },
                                    {
                                        "type": "linkfromreportbutton",
                                        "name": "select_button",
                                        "label": "LBL_SELECT_REPORTS_BUTTON_LABEL",
                                        "initial_filter": "by_module",
                                        "initial_filter_label": "LBL_FILTER_ACCOUNTS_REPORTS",
                                        "filter_populate": {
                                            "module": [
                                                "Accounts"
                                            ]
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
                "dupecheck-list": {
                    "meta": {
                        "panels": [
                            {
                                "name": "panel_header",
                                "label": "LBL_PANEL_1",
                                "fields": [
                                    {
                                        "name": "name",
                                        "link": true,
                                        "label": "LBL_LIST_ACCOUNT_NAME",
                                        "enabled": true,
                                        "default": true
                                    },
                                    {
                                        "name": "billing_address_city",
                                        "label": "LBL_LIST_CITY",
                                        "enabled": true,
                                        "default": true
                                    },
                                    {
                                        "name": "billing_address_country",
                                        "label": "LBL_BILLING_ADDRESS_COUNTRY",
                                        "enabled": true,
                                        "default": true
                                    },
                                    {
                                        "name": "phone_office",
                                        "label": "LBL_LIST_PHONE",
                                        "enabled": true,
                                        "default": true
                                    },
                                    {
                                        "name": "assigned_user_name",
                                        "label": "LBL_LIST_ASSIGNED_USER",
                                        "id": "ASSIGNED_USER_ID",
                                        "enabled": true,
                                        "default": false
                                    },
                                    {
                                        "name": "email",
                                        "label": "LBL_EMAIL_ADDRESS",
                                        "enabled": true,
                                        "default": false
                                    },
                                    {
                                        "name": "date_entered",
                                        "type": "datetime",
                                        "label": "LBL_DATE_ENTERED",
                                        "enabled": true,
                                        "default": false,
                                        "readonly": true
                                    }
                                ]
                            }
                        ]
                    }
                },
                "recordlist": {
                    "meta": {
                        "selection": {
                            "type": "multi",
                            "actions": [
                                {
                                    "name": "mass_email_button",
                                    "type": "mass-email-button",
                                    "label": "LBL_EMAIL_COMPOSE",
                                    "primary": true,
                                    "events": {
                                        "click": "list:massaction:hide"
                                    },
                                    "acl_module": "Emails",
                                    "acl_action": "edit",
                                    "related_fields": [
                                        "name",
                                        "email"
                                    ]
                                },
                                {
                                    "name": "massupdate_button",
                                    "type": "button",
                                    "label": "LBL_MASS_UPDATE",
                                    "primary": true,
                                    "events": {
                                        "click": "list:massupdate:fire"
                                    },
                                    "acl_action": "massupdate"
                                },
                                {
                                    "name": "calc_field_button",
                                    "type": "button",
                                    "label": "LBL_UPDATE_CALC_FIELDS",
                                    "events": {
                                        "click": "list:updatecalcfields:fire"
                                    },
                                    "acl_action": "massupdate"
                                },
                                {
                                    "name": "addtolist_button",
                                    "type": "button",
                                    "label": "LBL_ADD_TO_PROSPECT_LIST_BUTTON_LABEL",
                                    "primary": true,
                                    "events": {
                                        "click": "list:massaddtolist:fire"
                                    },
                                    "acl_module": "ProspectLists",
                                    "acl_action": "edit"
                                },
                                {
                                    "name": "merge_button",
                                    "type": "button",
                                    "label": "LBL_MERGE",
                                    "primary": true,
                                    "events": {
                                        "click": "list:mergeduplicates:fire"
                                    },
                                    "acl_action": "edit"
                                },
                                {
                                    "name": "massdelete_button",
                                    "type": "button",
                                    "label": "LBL_DELETE",
                                    "acl_action": "delete",
                                    "primary": true,
                                    "events": {
                                        "click": "list:massdelete:fire"
                                    }
                                },
                                {
                                    "name": "export_button",
                                    "type": "button",
                                    "label": "LBL_EXPORT",
                                    "acl_action": "export",
                                    "primary": true,
                                    "events": {
                                        "click": "list:massexport:fire"
                                    }
                                }
                            ]
                        }
                    }
                },
                "subpanel-for-prospectlists": {
                    "meta": {
                        "type": "subpanel-list",
                        "panels": [
                            {
                                "name": "panel_header",
                                "label": "LBL_PANEL_1",
                                "fields": [
                                    {
                                        "name": "name",
                                        "label": "LBL_NAME",
                                        "enabled": true,
                                        "default": true,
                                        "link": true
                                    },
                                    {
                                        "label": "LBL_LIST_PHONE",
                                        "enabled": true,
                                        "default": true,
                                        "name": "phone_office"
                                    },
                                    {
                                        "label": "LBL_LIST_EMAIL",
                                        "enabled": true,
                                        "default": true,
                                        "name": "email"
                                    },
                                    {
                                        "label": "LBL_ASSIGNED_TO",
                                        "enabled": true,
                                        "default": true,
                                        "name": "assigned_user_name"
                                    }
                                ]
                            }
                        ]
                    }
                },
                "list": {
                    "meta": {
                        "panels": [
                            {
                                "name": "panel_header",
                                "label": "LBL_PANEL_1",
                                "fields": [
                                    {
                                        "name": "name",
                                        "link": true,
                                        "label": "LBL_LIST_ACCOUNT_NAME",
                                        "enabled": true,
                                        "default": true,
                                        "width": "xlarge"
                                    },
                                    {
                                        "name": "billing_address_city",
                                        "label": "LBL_LIST_CITY",
                                        "enabled": true,
                                        "default": true
                                    },
                                    {
                                        "name": "billing_address_country",
                                        "label": "LBL_BILLING_ADDRESS_COUNTRY",
                                        "enabled": true,
                                        "default": true
                                    },
                                    {
                                        "name": "phone_office",
                                        "label": "LBL_LIST_PHONE",
                                        "enabled": true,
                                        "default": true
                                    },
                                    {
                                        "name": "assigned_user_name",
                                        "label": "LBL_LIST_ASSIGNED_USER",
                                        "id": "ASSIGNED_USER_ID",
                                        "enabled": true,
                                        "default": true
                                    },
                                    {
                                        "name": "email",
                                        "label": "LBL_EMAIL_ADDRESS",
                                        "enabled": true,
                                        "default": true
                                    },
                                    {
                                        "name": "date_modified",
                                        "enabled": true,
                                        "default": true
                                    },
                                    {
                                        "name": "date_entered",
                                        "type": "datetime",
                                        "label": "LBL_DATE_ENTERED",
                                        "enabled": true,
                                        "default": true,
                                        "readonly": true
                                    }
                                ]
                            }
                        ]
                    }
                },
                "twitter": {
                    "meta": {
                        "dashlets": [
                            {
                                "name": "LBL_TWITTER_NAME",
                                "description": "LBL_TWITTER_DESCRIPTION",
                                "config": {
                                    "limit": "20"
                                },
                                "preview": {
                                    "title": "LBL_TWITTER_MY_ACCOUNT",
                                    "twitter": "sugarcrm",
                                    "limit": "3"
                                }
                            }
                        ],
                        "config": {
                            "fields": [
                                {
                                    "name": "limit",
                                    "label": "LBL_TWITTER_DISPLAY_ROWS",
                                    "type": "enum",
                                    "options": {
                                        "5": 5,
                                        "10": 10,
                                        "15": 15,
                                        "20": 20,
                                        "50": 50
                                    }
                                }
                            ]
                        }
                    }
                },
                "search-list": {
                    "meta": {
                        "panels": [
                            {
                                "name": "primary",
                                "fields": [
                                    {
                                        "name": "picture",
                                        "type": "avatar",
                                        "size": "medium",
                                        "readonly": true,
                                        "css_class": "pull-left"
                                    },
                                    {
                                        "name": "name",
                                        "type": "name",
                                        "link": true,
                                        "label": "LBL_SUBJECT"
                                    }
                                ]
                            },
                            {
                                "name": "secondary",
                                "fields": [
                                    "email",
                                    "phone_office"
                                ]
                            }
                        ]
                    }
                },
                "massupdate": {
                    "meta": {
                        "buttons": [
                            {
                                "type": "button",
                                "value": "cancel",
                                "css_class": "btn-link btn-invisible cancel_button",
                                "label": "LBL_CANCEL_BUTTON_LABEL",
                                "primary": false
                            },
                            {
                                "name": "update_button",
                                "type": "button",
                                "label": "LBL_UPDATE",
                                "acl_action": "massupdate",
                                "css_class": "btn-primary",
                                "primary": true
                            }
                        ],
                        "panels": [
                            {
                                "fields": []
                            }
                        ]
                    }
                },
                "_hash": "0ca36e2f603202e7fad37638a3e11121"
            },
            "datas": {
                "_hash": "40cd750bba9870f18aada2478b24840a"
            },
            "layouts": {
                "create": {
                    "meta": {
                        "components": [
                            {
                                "layout": {
                                    "type": "default",
                                    "name": "sidebar",
                                    "components": [
                                        {
                                            "layout": {
                                                "type": "base",
                                                "name": "main-pane",
                                                "css_class": "main-pane span8",
                                                "components": [
                                                    {
                                                        "view": "create"
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "layout": {
                                                "type": "base",
                                                "name": "preview-pane",
                                                "css_class": "preview-pane",
                                                "components": [
                                                    {
                                                        "layout": "preview"
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                "subpanels": {
                    "meta": {
                        "components": [
                            {
                                "layout": "subpanel",
                                "label": "LBL_CALLS_SUBPANEL_TITLE",
                                "context": {
                                    "link": "calls"
                                }
                            },
                            {
                                "layout": "subpanel",
                                "label": "LBL_MEETINGS_SUBPANEL_TITLE",
                                "context": {
                                    "link": "meetings"
                                }
                            },
                            {
                                "layout": "subpanel",
                                "label": "LBL_TASKS_SUBPANEL_TITLE",
                                "context": {
                                    "link": "tasks"
                                }
                            },
                            {
                                "layout": "subpanel",
                                "label": "LBL_NOTES_SUBPANEL_TITLE",
                                "context": {
                                    "link": "notes"
                                }
                            },
                            {
                                "layout": "subpanel",
                                "label": "LBL_MEMBER_ORG_SUBPANEL_TITLE",
                                "context": {
                                    "link": "members"
                                }
                            },
                            {
                                "layout": "subpanel",
                                "label": "LBL_EMAILS_SUBPANEL_TITLE",
                                "override_subpanel_list_view": "subpanel-for-accounts-archived-emails",
                                "context": {
                                    "link": "archived_emails"
                                }
                            },
                            {
                                "layout": "subpanel",
                                "label": "LBL_CONTACTS_SUBPANEL_TITLE",
                                "override_subpanel_list_view": "subpanel-for-accounts",
                                "context": {
                                    "link": "contacts"
                                }
                            },
                            {
                                "layout": "subpanel",
                                "label": "LBL_OPPORTUNITIES_SUBPANEL_TITLE",
                                "override_subpanel_list_view": "subpanel-for-accounts",
                                "context": {
                                    "link": "opportunities"
                                }
                            },
                            {
                                "layout": "subpanel",
                                "label": "LBL_LEADS_SUBPANEL_TITLE",
                                "context": {
                                    "link": "leads"
                                }
                            },
                            {
                                "layout": "subpanel",
                                "label": "LBL_CASES_SUBPANEL_TITLE",
                                "override_subpanel_list_view": "subpanel-for-accounts",
                                "context": {
                                    "link": "cases"
                                }
                            },
                            {
                                "layout": "subpanel",
                                "label": "LBL_BUGS_SUBPANEL_TITLE",
                                "context": {
                                    "link": "bugs"
                                }
                            },
                            {
                                "layout": "subpanel",
                                "label": "LBL_PRODUCTS_SUBPANEL_TITLE",
                                "context": {
                                    "link": "products"
                                }
                            },
                            {
                                "layout": "subpanel",
                                "label": "LBL_DOCUMENTS_SUBPANEL_TITLE",
                                "context": {
                                    "link": "documents"
                                }
                            },
                            {
                                "layout": "subpanel",
                                "label": "LBL_QUOTES_BILLTO",
                                "override_paneltop_view": "panel-top-for-accounts",
                                "override_subpanel_list_view": "subpanel-for-accounts",
                                "context": {
                                    "link": "quotes",
                                    "ignore_role": 0
                                }
                            },
                            {
                                "layout": "subpanel",
                                "label": "LBL_QUOTES_SHIPTO",
                                "override_paneltop_view": "panel-top-for-accounts",
                                "override_subpanel_list_view": "subpanel-for-accounts",
                                "context": {
                                    "link": "quotes_shipto",
                                    "ignore_role": 0
                                }
                            },
                            {
                                "layout": "subpanel",
                                "label": "LBL_CAMPAIGN_LIST_SUBPANEL_TITLE",
                                "context": {
                                    "link": "campaigns"
                                }
                            },
                            {
                                "layout": "subpanel",
                                "label": "LBL_CONTRACTS_SUBPANEL_TITLE",
                                "override_subpanel_list_view": "subpanel-for-accounts",
                                "context": {
                                    "link": "contracts"
                                }
                            },
                            {
                                "layout": "subpanel",
                                "label": "LBL_PROJECTS_SUBPANEL_TITLE",
                                "context": {
                                    "link": "project"
                                }
                            },
                            {
                                "layout": "subpanel",
                                "label": "LBL_DATAPRIVACY_SUBPANEL_TITLE",
                                "context": {
                                    "link": "dataprivacy"
                                }
                            }
                        ]
                    }
                },
                "list-dashboard": {
                    "meta": {
                        "metadata": {
                            "components": [
                                {
                                    "rows": [
                                        [
                                            {
                                                "view": {
                                                    "type": "dashablelist",
                                                    "label": "TPL_DASHLET_MY_MODULE",
                                                    "display_columns": [
                                                        "name",
                                                        "billing_address_country",
                                                        "billing_address_city"
                                                    ]
                                                },
                                                "context": {
                                                    "module": "Accounts"
                                                },
                                                "width": 12
                                            }
                                        ]
                                    ],
                                    "width": 12
                                }
                            ]
                        },
                        "name": "LBL_ACCOUNTS_LIST_DASHBOARD"
                    }
                },
                "record-dashboard": {
                    "meta": {
                        "metadata": {
                            "components": [
                                {
                                    "rows": [
                                        [
                                            {
                                                "view": {
                                                    "type": "opportunity-metrics",
                                                    "label": "LBL_DASHLET_OPPORTUNITY_NAME"
                                                },
                                                "width": 12
                                            }
                                        ],
                                        [
                                            {
                                                "view": {
                                                    "type": "casessummary",
                                                    "label": "LBL_DASHLET_CASES_SUMMARY_NAME"
                                                },
                                                "width": 12
                                            }
                                        ],
                                        [
                                            {
                                                "view": {
                                                    "type": "planned-activities",
                                                    "label": "LBL_PLANNED_ACTIVITIES_DASHLET"
                                                },
                                                "width": 12
                                            }
                                        ],
                                        [
                                            {
                                                "view": {
                                                    "type": "history",
                                                    "label": "LBL_HISTORY_DASHLET"
                                                },
                                                "width": 12
                                            }
                                        ]
                                    ],
                                    "width": 12
                                }
                            ]
                        },
                        "name": "LBL_ACCOUNTS_RECORD_DASHBOARD"
                    }
                },
                "_hash": "a24c809f41d197d4267225c7c8e54aa5"
            },
            "fieldTemplates": {
                "_hash": "40cd750bba9870f18aada2478b24840a"
            },
            "menu": {
                "header": {
                    "meta": [
                        {
                            "label": "LNK_NEW_ACCOUNT",
                            "acl_action": "create",
                            "acl_module": "Accounts",
                            "icon": "fa-plus",
                            "route": "#Accounts/create"
                        },
                        {
                            "route": "#Accounts",
                            "label": "LNK_ACCOUNT_LIST",
                            "acl_action": "list",
                            "acl_module": "Accounts",
                            "icon": "fa-bars"
                        },
                        {
                            "route": "#Reports?filterModule=Accounts",
                            "label": "LNK_ACCOUNT_REPORTS",
                            "acl_action": "list",
                            "acl_module": "Reports",
                            "icon": "fa-bar-chart-o"
                        },
                        {
                            "route": "#bwc/index.php?module=Import&action=Step1&import_module=Accounts",
                            "label": "LNK_IMPORT_ACCOUNTS",
                            "acl_action": "import",
                            "acl_module": "Accounts",
                            "icon": "fa-arrow-circle-o-up"
                        }
                    ]
                },
                "quickcreate": {
                    "meta": {
                        "layout": "create",
                        "label": "LNK_NEW_ACCOUNT",
                        "visible": true,
                        "order": 0,
                        "icon": "fa-plus"
                    }
                },
                "_hash": "66a8359c1a2a1fa94c5a4dc0479ccb5c"
            },
            "config": [],
            "filters": {
                "default": {
                    "meta": {
                        "default_filter": "all_records",
                        "fields": {
                            "name": [],
                            "account_type": [],
                            "industry": [],
                            "annual_revenue": [],
                            "address_street": {
                                "dbFields": [
                                    "billing_address_street",
                                    "shipping_address_street"
                                ],
                                "vname": "LBL_STREET",
                                "type": "text"
                            },
                            "address_city": {
                                "dbFields": [
                                    "billing_address_city",
                                    "shipping_address_city"
                                ],
                                "vname": "LBL_CITY",
                                "type": "text"
                            },
                            "address_state": {
                                "dbFields": [
                                    "billing_address_state",
                                    "shipping_address_state"
                                ],
                                "vname": "LBL_STATE",
                                "type": "text"
                            },
                            "address_postalcode": {
                                "dbFields": [
                                    "billing_address_postalcode",
                                    "shipping_address_postalcode"
                                ],
                                "vname": "LBL_POSTAL_CODE",
                                "type": "text"
                            },
                            "address_country": {
                                "dbFields": [
                                    "billing_address_country",
                                    "shipping_address_country"
                                ],
                                "vname": "LBL_COUNTRY",
                                "type": "text"
                            },
                            "rating": [],
                            "phone_office": [],
                            "website": [],
                            "ownership": [],
                            "employees": [],
                            "sic_code": [],
                            "ticker_symbol": [],
                            "date_entered": [],
                            "date_modified": [],
                            "tag": [],
                            "$owner": {
                                "predefined_filter": true,
                                "vname": "LBL_CURRENT_USER_FILTER"
                            },
                            "assigned_user_name": [],
                            "$favorite": {
                                "predefined_filter": true,
                                "vname": "LBL_FAVORITES_FILTER"
                            }
                        }
                    }
                },
                "basic": {
                    "meta": {
                        "create": true,
                        "quicksearch_field": [
                            "name"
                        ],
                        "quicksearch_priority": 1,
                        "quicksearch_split_terms": false,
                        "filters": [
                            {
                                "id": "all_records",
                                "name": "LBL_LISTVIEW_FILTER_ALL",
                                "filter_definition": [],
                                "editable": false
                            },
                            {
                                "id": "assigned_to_me",
                                "name": "LBL_ASSIGNED_TO_ME",
                                "filter_definition": {
                                    "$owner": ""
                                },
                                "editable": false
                            },
                            {
                                "id": "favorites",
                                "name": "LBL_FAVORITES",
                                "filter_definition": {
                                    "$favorite": ""
                                },
                                "editable": false
                            },
                            {
                                "id": "recently_viewed",
                                "name": "LBL_RECENTLY_VIEWED",
                                "filter_definition": {
                                    "$tracker": "-7 DAY"
                                },
                                "editable": false
                            },
                            {
                                "id": "recently_created",
                                "name": "LBL_NEW_RECORDS",
                                "filter_definition": {
                                    "date_entered": {
                                        "$dateRange": "last_7_days"
                                    }
                                },
                                "editable": false
                            }
                        ]
                    }
                },
                "_hash": "73d40ec9c1e23457b7551794e90d7022"
            },
            "dupCheckEnabled": true,
            "activityStreamEnabled": true,
            "ftsEnabled": true,
            "isBwcEnabled": false,
            "globalSearchEnabled": true,
            "favoritesEnabled": true,
            "followingEnabled": true,
            "_hash": "af6398e01a1ed5e5db5bf41059b901ce"
        }
    },
    "jssource_public": "cache/javascript/base/components_b604d386e15c89bc3bf91b0d44661ad4.js",
    
    
    getMetaStuff: function(module, stuff, i18n){
      if (this.modules[module] !==  undefined && this.modules[module][stuff] !== undefined)
      {
        let meta = this.modules[module][stuff];
        if (stuff === 'filters'){
          _.forEach(meta.enabledFilters, function(value){
            let label = i18n.t(value.label);
            if(label.string !== undefined){
              value.label = label.string;
            }
          });
        }
        return meta;
      }
      return false;
    }
    
});

terraform {
  required_providers {
    awscc = {
      source  = "hashicorp/awscc"
      version = "~> 1.0"
    }
  }
}

provider "awscc" {
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
  region     = var.region

}

provider "aws" {
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
  region     = var.region

  default_tags {
    tags = {
      app = var.app_name
    }
  }
}

module "amplify" {
  source                  = "./amplify"
  frontend_subdomain_name = var.frontend_subdomain_name
  root_domain_name        = var.root_domain_name
  github_token            = var.github_token
}

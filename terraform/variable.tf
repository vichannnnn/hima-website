variable "region" {
  description = "AWS region to deploy the network to."
  type        = string
}

variable "app_name" {
  description = "Name of the app."
  type        = string
}

variable "aws_access_key" {
  description = "AWS access key"
  type        = string
  sensitive   = true
}

variable "aws_secret_key" {
  description = "AWS secret key"
  type        = string
  sensitive   = true
}

variable "frontend_subdomain_name" {
  description = "Frontend Domain name"
  type        = string
}

variable "root_domain_name" {
  description = "Root Domain name"
  type        = string
}


variable "github_token" {
  description = "Github Token"
  type        = string
  sensitive   = true
}


resource "aws_amplify_app" "amplify_app" {
  name                        = "hima-website"
  repository                  = "https://github.com/vichannnnn/hima-website.git"
  access_token                = var.github_token
  enable_auto_branch_creation = true
  platform = "WEB_COMPUTE"


  auto_branch_creation_patterns = [
    "*",
    "*/**",
  ]

  auto_branch_creation_config {
    enable_auto_build = true
    stage = "PRODUCTION"
    framework = "Next.js - SSR"
  }

  # custom_rule {
  #   source = "/<*>"
  #   status = "404"
  #   target = "/index.html"
  # }

  environment_variables = {
    ENVIRONMENT = "production"
    AMPLIFY_MONOREPO_APP_ROOT = "/frontend"
  }
}

resource "aws_amplify_branch" "main" {
  app_id      = aws_amplify_app.amplify_app.id
  branch_name = "main"
  stage = "PRODUCTION"
  framework = "Next.js - SSR"

  environment_variables = {
    NODE_ENV = "production"
  }

  depends_on = [aws_amplify_app.amplify_app]
}

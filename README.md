# Project Name

Indoor Climbing Event finder, signup, and althele favorite. 

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setting Up Environment Variables](#setting-up-environment-variables)
  - [Setting up Supabase Local](#supabase)
  - [Setting up Prisma Local](#prisma)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Provide a brief introduction to your project, its purpose, and any context that's relevant to understanding the use of environment variables.

## Getting Started

Explain how to set up and run your project locally.

### Prerequisites

List any prerequisites that users need to have installed before they can run your project. For example:

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-project.git


### prisma 
[https://www.prisma.io/docs/reference/api-reference/command-reference]


1. npx prisma [command]
  1. db **manage DB scheme by using push**
  2. Mirgrate  
  3. studio **browse data locally** 
2. npx prisma seed **seeds database locally** 


### setting-up-environment-variables
See .env.example for layout
Set up .env.local with same layout - this will overrule .env for local enviroment 



### Supabase 
Local Set up 
1. Docker containers must be running in background 
2. CLI: npx supabase start  **starts locally**
    - npx supabase status **gets local host URL and Etc** 
3. npx supabase stop **if need to stop container**

Login to supabase and link to hosted project online
[https://supabase.com/docs/reference/cli/supabase-link]
1. npx supabase link --project-ref ******** **ref under project settigns**
    -Password required 






# Weqeep - Case study

👉 The project involves creating an interface representing a dashboard with key information about electricity for France.

This is a Laravel-based project with inertia and React.

## Requirements

- PHP 8.4 or higher
- Composer
- Node.js & npm

## Installation

1. **Install PHP dependencies:**
   ```sh
   composer install
   ```

2. **Install Node.js dependencies:**
   ```sh
   npm install
   ```

3. **Copy the environment file and generate the application key:**
   ```sh
   cp .env.example .env
   php artisan key:generate
   ```
   /!\ Add you API key to connect to Electricity maps API

4. **Configure your `.env` file as needed.**

    Sqlite recommended


5. **Run database migrations:**
   ```sh
   php artisan migrate
   ```
6. **You can fetch the electricity data running the following command:**
   ```sh
   php artisan getelectricitydata
   ```
7. **or set up a Cron job to automate the data fetching:**
   ```sh
   * * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
   ```

## Code Quality

### Run Pint (PHP code style fixer)

```sh
vendor/bin/pint
```

### Run PHPStan (Static analysis, level 8)

```sh
vendor/bin/phpstan analyse
```

## Usage

**Start the development & frontend servers :**
```sh
composer run dev
```
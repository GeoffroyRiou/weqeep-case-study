<?php

declare(strict_types=1);

namespace App\Services;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class ElectricityMapsService
{
    private Client $client;

    public function __construct(
        private readonly string $apiKey,
        private readonly string $apiUrl,
    ) {
        $this->client = new Client([
            'base_uri' => $this->apiUrl,
            'headers' => [
                'auth-token' => $this->apiKey,
                'Content-Type' => 'application/json',
            ],
        ]);
    }

    /**
     * Makes a GET request to the Electricity Maps API.
     *
     * @param  string  $endpoint  The API endpoint to call.
     * @param  array<string, string>  $params  Optional query parameters for the request.
     * @return array<string, mixed> The JSON response decoded into an associative array.
     *
     * @throws GuzzleException If the HTTP request fails.
     */
    private function doRequest(string $endpoint, array $params = []): array
    {
        $response = $this->client->request('GET', $endpoint, [
            'query' => $params,
        ]);

        return json_decode($response->getBody()->getContents(), true);
    }

    /**
     * @return array<string, mixed> The JSON response decoded into an associative array.
     *
     * @throws GuzzleException If the HTTP request fails.
     */
    public function getPowerBreakdown(string $zone): array
    {
        return $this->doRequest('power-breakdown/latest', [
            'zone' => $zone,
        ]);
    }

    /**
     * @return array<string, mixed> The JSON response decoded into an associative array.
     *
     * @throws GuzzleException If the HTTP request fails.
     */
    public function getCarbonIntensity(string $zone): array
    {
        return $this->doRequest('carbon-intensity/latest', [
            'zone' => $zone,
        ]);
    }
}

Feature: Manage JCdecaux Contracts

    Scenario: Get all contracts
        When I GET /api/v1/contracts
        Then response status code should be 200
        And json response should match
        | field             | matcher | value       |
        | [0].name          | equal   | Rouen       |
        | [0].countryCode   | equal   | FR          |
        | [1].name          | equal   | Toulouse    |
        | [1].countryCode   | equal   | FR          |
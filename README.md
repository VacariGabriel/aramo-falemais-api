# aramo-falemais-api

## Objetivo ?
Esta API tem como objetivo auxiliar o frontend com o cálculo das tarifas de telefonia, também mostrar os planos e ddds disponíveis.

## Tecnologias usadas ?
- Nodejs
- Express
- Docker
- Heroku

## Algumas explicações
Não usei nenhum banco de dados porque achei que seria "overengineering" para um projeto simples.

## Como rodar o projeto 
``` docker build -t aramo-falemais-api . ```


``` docker run -p 3000:3000 aramo-falemais-api ```

## Rotas

- /calculate-tariff - *POST*
- /ddds - *GET*
- /plans - *GET*

## Exemplos
- /calculate-tariff

    **Exemplo do payload esperado**

    ```json 
        {
            "values": {
                "source": "011",
                "destination": "018",
                "callTime": 20,
                "plan": "FaleMais 30"
            }
        }
    ```
    
    **Exemplo de retorno**

    ```json
        {
            "tariffs": {
                "withPlan": "0.00",
                "withoutPlan": "38.00"
            }
        }    
    ```

- /ddds

    **Exemplo de retorno**
    
    ```json
        {
            "ddds": ["011", "016", "017", "018"]
        }
    ```
- /plans

    **Exemplo de retorno**
    *Neste exemplo será mostrado apenas 1 dos planos.*

    ```json
        {
            "plans": [
                {
                    "name": "FaleMais 30",
                    "freeMinutes":30,
                    "description":"Lorem ipsum dolor sit amet,         consectetur adipiscing elit. Fusce nibh orci, faucibus a nisi a, interdum mollis elit. Vestibulum maximus eros in mi vestibulum lobortis. Nullam ac dolor velit. Nam ullamcorper lorem non hendrerit fringilla. Aenean orci lacus, volutpat id sem ac, consectetur tincidunt ante."
                }
            ]
        }
    ```
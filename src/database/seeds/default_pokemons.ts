import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('pokemons').insert(
        [
            {
            name: 'Bulbasaur',
            pokedex_number: '1',
            img_name: '1',
            generation: '1',
            evolution_stage: '1',
            evolved: '0',
            family_id: '1',
            cross_gen: '0',
            type_1: 'grass',
            type_2: 'poison',
            weather_1: 'Sunny/clear',
            weather_2: 'Cloudy',
            stat_total: '326',
            atk: '118',
            def: '118',
            sta: '90',
            legendary: '0',
            aquireable: '1',
            spawns: '1',
            regional: '0',
            raidable: '0',
            hatchable: '5',
            shiny: '0',
            nest: '1',
            new: '0',
            not_gettable: '0',
            future_evolve: '0',
            hundredcp_at40: '981',
            hundredcp_at39: '967'
            },
            {
            name: 'Ivysaur',
            pokedex_number: '2',
            img_name: '2',
            generation: '1',
            evolution_stage: '2',
            evolved: '0',
            family_id: '1',
            cross_gen: '0',
            type_1: 'grass',
            type_2: 'poison',
            weather_1: 'Sunny/clear',
            weather_2: 'Cloudy',
            stat_total: '422',
            atk: '151',
            def: '151',
            sta: '120',
            legendary: '0',
            aquireable: '1',
            spawns: '1',
            regional: '0',
            raidable: '0',
            hatchable: '0',
            shiny: '0',
            nest: '0',
            new: '0',
            not_gettable: '0',
            future_evolve: '0',
            hundredcp_at40: '1552',
            hundredcp_at39: '1529'
            },
            {
            name: 'Venusaur',
            pokedex_number: '3',
            img_name: '3',
            generation: '1',
            evolution_stage: '3',
            evolved: '1',
            family_id: '1',
            cross_gen: '0',
            type_1: 'grass',
            type_2: 'poison',
            weather_1: 'Sunny/clear',
            weather_2: 'Cloudy',
            stat_total: '556',
            atk: '198',
            def: '198',
            sta: '160',
            legendary: '0',
            aquireable: '1',
            spawns: '1',
            regional: '0',
            raidable: '0',
            hatchable: '0',
            shiny: '0',
            nest: '0',
            new: '0',
            not_gettable: '0',
            future_evolve: '0',
            hundredcp_at40: '2568',
            hundredcp_at39: '2531'
            },
            {
            name: 'Charmander',
            pokedex_number: '4',
            img_name: '4',
            generation: '1',
            evolution_stage: '1',
            evolved: '0',
            family_id: '2',
            cross_gen: '0',
            type_1: 'fire',
            type_2: '',
            weather_1: 'Sunny/clear',
            weather_2: '',
            stat_total: '290',
            atk: '116',
            def: '96',
            sta: '78',
            legendary: '0',
            aquireable: '1',
            spawns: '1',
            regional: '0',
            raidable: '0',
            hatchable: '5',
            shiny: '0',
            nest: '1',
            new: '0',
            not_gettable: '0',
            future_evolve: '0',
            hundredcp_at40: '831',
            hundredcp_at39: '819'
            },
            {
            name: 'Charmeleon',
            pokedex_number: '5',
            img_name: '5',
            generation: '1',
            evolution_stage: '2',
            evolved: '0',
            family_id: '2',
            cross_gen: '0',
            type_1: 'fire',
            type_2: '',
            weather_1: 'Sunny/clear',
            weather_2: '',
            stat_total: '403',
            atk: '158',
            def: '129',
            sta: '116',
            legendary: '0',
            aquireable: '1',
            spawns: '1',
            regional: '0',
            raidable: '0',
            hatchable: '0',
            shiny: '0',
            nest: '0',
            new: '0',
            not_gettable: '0',
            future_evolve: '0',
            hundredcp_at40: '1484',
            hundredcp_at39: '1462'
            },
            {
            name: 'Charizard',
            pokedex_number: '6',
            img_name: '6',
            generation: '1',
            evolution_stage: '3',
            evolved: '1',
            family_id: '2',
            cross_gen: '0',
            type_1: 'fire',
            type_2: 'flying',
            weather_1: 'Sunny/clear',
            weather_2: 'Windy',
            stat_total: '555',
            atk: '223',
            def: '176',
            sta: '156',
            legendary: '0',
            aquireable: '1',
            spawns: '1',
            regional: '0',
            raidable: '0',
            hatchable: '0',
            shiny: '0',
            nest: '0',
            new: '0',
            not_gettable: '0',
            future_evolve: '0',
            hundredcp_at40: '2686',
            hundredcp_at39: '2648'
            },
            {
            name: 'Squirtle',
            pokedex_number: '7',
            img_name: '7',
            generation: '1',
            evolution_stage: '1',
            evolved: '0',
            family_id: '3',
            cross_gen: '0',
            type_1: 'water',
            type_2: '',
            weather_1: 'Rainy',
            weather_2: '',
            stat_total: '304',
            atk: '94',
            def: '122',
            sta: '88',
            legendary: '0',
            aquireable: '1',
            spawns: '1',
            regional: '0',
            raidable: '0',
            hatchable: '5',
            shiny: '0',
            nest: '1',
            new: '0',
            not_gettable: '0',
            future_evolve: '0',
            hundredcp_at40: '808',
            hundredcp_at39: '797'
            },
            {
            name: 'Wartortle',
            pokedex_number: '8',
            img_name: '8',
            generation: '1',
            evolution_stage: '2',
            evolved: '0',
            family_id: '3',
            cross_gen: '0',
            type_1: 'water',
            type_2: '',
            weather_1: 'Rainy',
            weather_2: '',
            stat_total: '399',
            atk: '126',
            def: '155',
            sta: '118',
            legendary: '0',
            aquireable: '1',
            spawns: '1',
            regional: '0',
            raidable: '0',
            hatchable: '0',
            shiny: '0',
            nest: '0',
            new: '0',
            not_gettable: '0',
            future_evolve: '0',
            hundredcp_at40: '1324',
            hundredcp_at39: '1305'
            },
            {
            name: 'Blastoise',
            pokedex_number: '9',
            img_name: '9',
            generation: '1',
            evolution_stage: '3',
            evolved: '1',
            family_id: '3',
            cross_gen: '0',
            type_1: 'water',
            type_2: '',
            weather_1: 'Rainy',
            weather_2: '',
            stat_total: '539',
            atk: '171',
            def: '210',
            sta: '158',
            legendary: '0',
            aquireable: '1',
            spawns: '1',
            regional: '0',
            raidable: '0',
            hatchable: '0',
            shiny: '0',
            nest: '0',
            new: '0',
            not_gettable: '0',
            future_evolve: '0',
            hundredcp_at40: '2291',
            hundredcp_at39: '2259'
            },
            {
            name: 'Caterpie',
            pokedex_number: '10',
            img_name: '10',
            generation: '1',
            evolution_stage: '1',
            evolved: '0',
            family_id: '4',
            cross_gen: '0',
            type_1: 'bug',
            type_2: '',
            weather_1: 'Rainy',
            weather_2: '',
            stat_total: '207',
            atk: '55',
            def: '62',
            sta: '90',
            legendary: '0',
            aquireable: '1',
            spawns: '1',
            regional: '0',
            raidable: '0',
            hatchable: '0',
            shiny: '0',
            nest: '1',
            new: '0',
            not_gettable: '0',
            future_evolve: '0',
            hundredcp_at40: '393',
            hundredcp_at39: '387'
            },
            {
            name: 'Metapod',
            pokedex_number: '11',
            img_name: '11',
            generation: '1',
            evolution_stage: '2',
            evolved: '0',
            family_id: '4',
            cross_gen: '0',
            type_1: 'bug',
            type_2: '',
            weather_1: 'Rainy',
            weather_2: '',
            stat_total: '239',
            atk: '45',
            def: '94',
            sta: '100',
            legendary: '0',
            aquireable: '1',
            spawns: '1',
            regional: '0',
            raidable: '0',
            hatchable: '0',
            shiny: '0',
            nest: '0',
            new: '0',
            not_gettable: '0',
            future_evolve: '0',
            hundredcp_at40: '419',
            hundredcp_at39: '413'
            },
            {
            name: 'Butterfree',
            pokedex_number: '12',
            img_name: '12',
            generation: '1',
            evolution_stage: '3',
            evolved: '0',
            family_id: '4',
            cross_gen: '0',
            type_1: 'bug',
            type_2: 'flying',
            weather_1: 'Rainy',
            weather_2: 'Windy',
            stat_total: '438',
            atk: '167',
            def: '151',
            sta: '120',
            legendary: '0',
            aquireable: '1',
            spawns: '1',
            regional: '0',
            raidable: '0',
            hatchable: '0',
            shiny: '0',
            nest: '0',
            new: '0',
            not_gettable: '0',
            future_evolve: '0',
            hundredcp_at40: '1701',
            hundredcp_at39: '1677'
            },
            {
            name: 'Weedle',
            pokedex_number: '13',
            img_name: '13',
            generation: '1',
            evolution_stage: '1',
            evolved: '0',
            family_id: '5',
            cross_gen: '0',
            type_1: 'bug',
            type_2: 'poison',
            weather_1: 'Rainy',
            weather_2: 'Cloudy',
            stat_total: '198',
            atk: '63',
            def: '55',
            sta: '80',
            legendary: '0',
            aquireable: '1',
            spawns: '1',
            regional: '0',
            raidable: '0',
            hatchable: '0',
            shiny: '0',
            nest: '1',
            new: '0',
            not_gettable: '0',
            future_evolve: '0',
            hundredcp_at40: '397',
            hundredcp_at39: '391'
            },
            {
            name: 'Kakuna',
            pokedex_number: '14',
            img_name: '14',
            generation: '1',
            evolution_stage: '2',
            evolved: '0',
            family_id: '5',
            cross_gen: '0',
            type_1: 'bug',
            type_2: 'poison',
            weather_1: 'Rainy',
            weather_2: 'Cloudy',
            stat_total: '222',
            atk: '46',
            def: '86',
            sta: '90',
            legendary: '0',
            aquireable: '1',
            spawns: '1',
            regional: '0',
            raidable: '0',
            hatchable: '0',
            shiny: '0',
            nest: '0',
            new: '0',
            not_gettable: '0',
            future_evolve: '0',
            hundredcp_at40: '392',
            hundredcp_at39: '386'
            },
            ]
    );
}
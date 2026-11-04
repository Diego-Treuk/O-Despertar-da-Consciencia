const nomes = ["AURA", "CYPHER", "ORION", "NEXUS", "VANGUARD", "KAIROS", "THETA", "ECHO", "ATLAS", "NOVA"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);

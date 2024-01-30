<?php
// obter conexão com o db
include('conexao.php');

// obter os dados
$obterDados = file_get_contents('php://input');

// extrair os dados 
$extrair = json_decode($obterDados);

// separar os dados do Json
$nomeCurso = $extrair->cursos->nomeCurso;
$valorCurso = $extrair->cursos->valorCurso;

// sql [como nomeCurso ser uma string, é bom colocar entre apostrofe]
$sql = "INSERT INTO cursos (nomeCurso, valorCurso) VALUES ('$nomeCurso', $valorCurso)";
// executa a query
mysqli_query($conexao, $sql);

// exportar os dados cadastrados
// aqui será exportado um objeto jason com os dados do curso, possivelmente para validação?
// não entendi bem esta parte
$curso = [
    'nomeCurso' => $nomeCurso,
    'valorCurso' => $valorCurso
];

// Imprime a resposta JSON no corpo da resposta HTTP
echo json_encode(['cursos' => $curso]);
// ou use return json_encode(['cursos' => $curso]); se estiver em uma função

// Certifique-se de encerrar o script para evitar qualquer saída adicional
exit;

?>
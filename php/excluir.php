<?php
// Incluir a conexão
include('conexao.php');

// Obter os dados
$obterDados = file_get_contents('php://input');

// Extrair os dados do JSON
$extrair = json_decode($obterDados);

// Verificar se o 'idCurso' está presente e é um número inteiro válido
if (isset($extrair->cursos->idCurso) && is_numeric($extrair->cursos->idCurso)) {
    // Separar os dados do JSON
    $idCurso = intval($extrair->cursos->idCurso);
    $idCurso = 8;
    // Consulta SQL para excluir o curso
    $sql = "DELETE FROM cursos WHERE idCurso = $idCurso";

    // Executar a consulta
    $resultado = mysqli_query($conexao, $sql);

    // Verificar se a exclusão foi bem-sucedida
    echo json_encode($resultado ? ['message' => 'Curso excluído com sucesso'] : ['error' => 'Não foi possível excluir o curso']);
} else {
    // ID de curso inválido
    echo json_encode(['error' => 'ID de curso inválido']);
}

// Certifique-se de encerrar o script para evitar qualquer saída adicional
exit;
?>

<?php
 
/* apenas dispara o envio do formulário caso exista $_POST['enviarFormulario']*/
 
if (isset($_POST['enviarFormulario'])){
 
 
/*** INÍCIO - DADOS A SEREM ALTERADOS DE ACORDO COM SUAS CONFIGURAÇÕES DE E-MAIL ***/
 
$enviaFormularioParaNome = 'NeoVita Foods';
$enviaFormularioParaEmail = 'ronal2do@gmail.com';
 
$caixaPostalServidorNome = 'Nova mensagem do site';
$caixaPostalServidorEmail = 'ronal2do@gmail.com';
$caixaPostalServidorSenha = 'chuba3985';
 
/*** FIM - DADOS A SEREM ALTERADOS DE ACORDO COM SUAS CONFIGURAÇÕES DE E-MAIL ***/ 
 
 
/* abaixo as veriaveis principais, que devem conter em seu formulario*/
 
$remetenteNome  = $_POST['nome'];
$remetenteEmail = $_POST['email'];
$assunto  = 'Enviada por '.$_POST['email'];
$mensagem = $_POST['mensagem'];
 
$mensagemConcatenada = 'Formulário gerado via website'.'<br/>'; 
$mensagemConcatenada .= '-------------------------------<br/><br/>'; 
$mensagemConcatenada .= 'Nome: '.$remetenteNome.'<br/>'; 
$mensagemConcatenada .= 'E-mail: '.$remetenteEmail.'<br/>'; 
$mensagemConcatenada .= 'Assunto: '.$assunto.'<br/>';
$mensagemConcatenada .= '-------------------------------<br/><br/>'; 
$mensagemConcatenada .= 'Mensagem: "'.$mensagem.'"<br/>';
 
 
/*********************************** A PARTIR DAQUI NAO ALTERAR ************************************/ 
 
require_once('PHPMailer-master/PHPMailerAutoload.php');
 
$mail = new PHPMailer();
 
$mail->IsSMTP();
$mail->SMTPAuth  = true;
$mail->Charset   = 'utf8_decode()';
$mail->Host  = 'smtp.'.substr(strstr($caixaPostalServidorEmail, '@'), 1);
$mail->Port  = '587';
$mail->Username  = $caixaPostalServidorEmail;
$mail->Password  = $caixaPostalServidorSenha;
$mail->From  = $caixaPostalServidorEmail;
$mail->FromName  = utf8_decode($caixaPostalServidorNome);
$mail->AddReplyTo($remetenteEmail,$remetenteNome); 
$mail->IsHTML(true);
$mail->Subject  = utf8_decode($assunto);
$mail->Body  = utf8_decode($mensagemConcatenada);
 
 
$mail->AddAddress($enviaFormularioParaEmail,utf8_decode($enviaFormularioParaNome));
 
if(!$mail->Send()){
$mensagemRetorno = 'Erro ao enviar formulário: '. print($mail->ErrorInfo);
$pagina = "/";
}else{
$mensagemRetorno = 'Formulário enviado com sucesso!';
} 
$pagina = "/";

}
header("location:$pagina");
?>
 
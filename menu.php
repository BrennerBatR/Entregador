<?php
include("_PHP/DadosUser.php");


if($categoria == 10 ){ //imprimo o menu completo
    $menu = <<<ADM
    <nav id="sidebar"  class="active">
                <div class="sidebar-header">
                    <img id="logo" src="_imagens/logo.jpg">
                </div>
                <ul class="list-unstyled components">
                    <!-- <p>Dummy Heading</p> -->
                    <li>
                        <a href="empresas.php">Relatório</a>
                    </li>
                   
                    <li>
                        <a href="#admSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle" >Administrador </a>
                        
                        <ul class="collapse" id="admSubmenu">
                            <li>
                                <a href="cadastrar_empresa.php">Cadastrar Empresa</a>
                            </li>
                            <li>
                                <a href="criar_usuario_adm.php">Usuários</a>
                            </li>
                        </ul>
                    </li>
       
                </ul>

                <ul class="list-unstyled CTAs">
                    <li>
                        <p>Administrador</p>
                    </li>
                    <li>
                        <a href="_PHP/Desconectar.php" class="article">Sair</a>
                    </li>
                </ul>

    </nav>

ADM;
}

else if($categoria == 4){ //imprimo o menu completo + cadastrar usuario
    $menu = <<<DONO
  <script>
    setInterval(function () {
        let token = '$token';
        let dataatual = moment().format('YYYY-MM-DD');
        let data = {
            qtd : 2
        }

               let num = data.qtd;
               document.getElementById("num_pedidos").innerHTML = num;  
               document.getElementById("num_pedidos").name = num;  
               var pedidosTotal = document.getElementById("pedidosNum");
                    if(pedidosTotal !== undefined && pedidosTotal !== null){
                        var numStr = '';
                        num = num.toString();
                        if(num.length === 1)
                            numStr = "00"+num;
                        else if(num.length === 2)
                            numStr = "0"+num;
                        else
                            numStr = num;                        
                        pedidosTotal.innerHTML = "Nº PEDIDOS: " + numStr;
                       // document.getElementById("num_pedidos").name = data[1];     
                      }
                 
    }, 3000); //d
    </script>

    <nav id="sidebar"  class="active">
                <div class="sidebar-header">
                    <img id="logo" src="_imagens/logo.jpg">
                </div>

                <ul class="list-unstyled components">
                    <!-- <p>Dummy Heading</p> -->
                    <li>
                        <a href="principal.php">Página inicial</a>
                    </li>
                    <li>
                        <a href="#itensSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Meus
                            Itens</a>
                        <ul class="collapse " id="itensSubmenu">
                            <li>
                                <a href="ver_produtos.php">Ver/Editar Itens</a>
                            </li>
                            <li>
                                <a href="cadastrar_item.php">Cadastrar novo item</a>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <a href="#pedidosSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle" >Pedidos <span id="num_pedidos"></span></a>
                        
                        <ul class="collapse" id="pedidosSubmenu">
                            <li>
                                <a href="pedidos.php">Pedidos em aberto</a>
                            </li>
                            <li>
                                <a href="pedidos_fechados.php">Pedidos fechados</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#userSubmedu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle" >Usuários</a>
                        
                        <ul class="collapse" id="userSubmedu">                      
                               <li>
                                <a href="cadastrar_usuario.php">Cadastrar Usuário</a>
                            </li> 
                           
                        </ul>
                    </li>  
                     <li>
                        <a href="#configSubmedu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle" >Configurações </a>
                        
                        <ul class="collapse" id="configSubmedu">                      
                             <li>
                                <a href="configuracao_empresa.php">Configuração da Empresa</a>
                            </li>
                             <li>
                                <a href="cadastrar_horario.php">Cadastrar Horário</a>
                            </li>
                              <li>
                                <a href="editar_horario.php">Editar Horário</a>
                            </li>
                           
                        </ul>
                    </li>
                </ul>

                <ul class="list-unstyled CTAs">
                    <li>
                        <p>$empresa</p>
                    </li>
                    <li>
                        <a href="_PHP/Desconectar.php" class="article">Sair</a>
                    </li>
                </ul>

    </nav>

DONO;
}

else{ //imprimo o menu so de pedidos
    $menu = <<<FUNCIONARIO
    <script>
    setInterval(function () {
        let data = {
            "qtd" :4
        }
        let token = '$token';
        let dataatual = moment().format('YYYY-MM-DD');
   
               let num = data.qtd;
               document.getElementById("num_pedidos").innerHTML = num;  
               document.getElementById("num_pedidos").name = num;  
               var pedidosTotal = document.getElementById("pedidosNum");
                    if(pedidosTotal !== undefined && pedidosTotal !== null){
                        var numStr = '';
                        num = num.toString();
                        if(num.length === 1)
                            numStr = "00"+num;
                        else if(num.length === 2)
                            numStr = "0"+num;
                        else
                            numStr = num;                        
                        pedidosTotal.innerHTML = "Nº PEDIDOS: " + numStr;
                       // document.getElementById("num_pedidos").name = data[1];     
                      }
                 
    }, 3000); //d
    </script>
    <nav id="sidebar" class="active">
                <div class="sidebar-header">
                    <img id="logo" src="_imagens/logo.jpg">
                </div>
                <ul class="list-unstyled components">
                    <!-- <p>Dummy Heading</p> -->
             
                    <li>
                        <a href="#pedidosSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pedidos <span id="num_pedidos"></span></a>
                        <ul class="collapse" id="pedidosSubmenu">
                            <li>
                                <a href="pedidos.php">Pedidos em aberto</a>
                            </li>
          
                        </ul>
                    </li>
                </ul>
                <ul class="list-unstyled CTAs">
                    <li>
                        <p>$empresa</p>
                    </li>
                    <li>
                       <a href="_PHP/Desconectar.php" class="article">Sair</a>

                    </li>
                </ul>

    </nav>
FUNCIONARIO;

}


$footer =<<<FOOTER

    <footer id="footer" class="page-footer font-small blue" style="border-top: 1px dotted black;">

        <!-- Copyright -->
        <div class="footer-copyright text-center py-3">Copyright © 2018-2019 :<a href="https://www.linkedin.com/in/brenner-batista-253552171/" style="color: #FF6F00 ; ">Brenner Batista</a>
        </div>
        <!-- Copyright -->

    </footer>


FOOTER;


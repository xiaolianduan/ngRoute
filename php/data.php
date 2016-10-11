<?php
        $id=$_GET["id"];
        $arr=array(
              array("name"=>"zhangsan",
                    "age"=>"20",
                    "sex"=>"男"),
              array("name"=>"lisi",
                    "age"=>"22",
                    "sex"=>"男"),
              array("name"=>"wangwu",
                    "age"=>"23",
                    "sex"=>"女")
        );
        echo json_encode($arr[$id]);

//  echo json_encode($arr[$id][$id1]);
?>
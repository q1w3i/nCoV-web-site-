function confirmDel2(num)
        {
        if(window.confirm("确定要删除该数据吗？(注意：无法撤销)"))
        {
            location.href = "../admin/delete_hotword.php?num="+num;
        }
        }
var table=null;
$(document).ready(function()
    {
        table=$('#order').dataTable({
            "ajax":"{{url('getalldata'}}",
            "lengthMenu":[[5,10,15,-1],[5,10,15,"All"]]
        });
    }
);
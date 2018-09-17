<% include partials/header.ejs %>

    <h1 class="text-center">Here are some great places nearby <%= location %>:</h1>
    <div class="container well">
        <table class="table">
            <tr>
                <th>Distance</th>
                <th>Name</th>
                <th>Rating</th>
            </tr>
            
            
            <% results.forEach(function(display){ %>
                <% if((display.rating % 1) == 0) { %>
                <%    stars = '/regular/regular_' + display.rating + '.png'; %>
                <% } else { %>
                <%   stars = '/regular/regular_' + Math.floor(display.rating) + '_half.png'; %>
                <% }; %>
                
                
                <tr class="listResults">
                    <td><h4><%= ((display.distance)/1609.34).toFixed(1) %> miles</h4></td>
                    <td><h4><a href="<%= display.url%>" target="_blank"><%= display.name %></a></h4></td>
                    <td><h4><img src="<%= stars %>" alt="stars"></h4></td>
                </tr>
            <% }); %>

        </table>
        
    </div>


<% include partials/footer.ejs %>
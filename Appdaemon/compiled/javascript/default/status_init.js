$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Status");
    content_width = (121 + 5) * 10 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [121, 122],
        avoid_overlapped_widgets: true,
        max_rows: 6,
        max_size_x: 10,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-nav-main" id="default-nav-main"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-label" id="default-label"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 6, 1, 2, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-reload" id="default-reload"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 8, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock" id="default-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 2, 1, 9, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-nav-weather" id="default-nav-weather"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseiframe-default-cpu-use" id="default-cpu-use"><div class="outer-frame iframe"><iframe class="scaled-frame" data-bind="attr: {style: frame_style, src: frame_src}" allowfullscreen></iframe></div><div class="outer-image"><img class="img-frame" data-bind="attr: {src: img_src}"></img></div><h1 class="title" data-bind="text: title, attr: {style: title_style}"></h1></div></li>', 2, 1, 2, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseiframe-default-memory-use" id="default-memory-use"><div class="outer-frame iframe"><iframe class="scaled-frame" data-bind="attr: {style: frame_style, src: frame_src}" allowfullscreen></iframe></div><div class="outer-image"><img class="img-frame" data-bind="attr: {src: img_src}"></img></div><h1 class="title" data-bind="text: title, attr: {style: title_style}"></h1></div></li>', 2, 1, 4, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseiframe-default-disk-use" id="default-disk-use"><div class="outer-frame iframe"><iframe class="scaled-frame" data-bind="attr: {style: frame_style, src: frame_src}" allowfullscreen></iframe></div><div class="outer-image"><img class="img-frame" data-bind="attr: {src: img_src}"></img></div><h1 class="title" data-bind="text: title, attr: {style: title_style}"></h1></div></li>', 2, 1, 6, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseiframe-default-grafana-logo" id="default-grafana-logo"><div class="outer-frame iframe"><iframe class="scaled-frame" data-bind="attr: {style: frame_style, src: frame_src}" allowfullscreen></iframe></div><div class="outer-image"><img class="img-frame" data-bind="attr: {src: img_src}"></img></div><h1 class="title" data-bind="text: title, attr: {style: title_style}"></h1></div></li>', 3, 1, 8, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-nav-spacer" id="default-nav-spacer"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 3, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseiframe-default-cpu-cores" id="default-cpu-cores"><div class="outer-frame iframe"><iframe class="scaled-frame" data-bind="attr: {style: frame_style, src: frame_src}" allowfullscreen></iframe></div><div class="outer-image"><img class="img-frame" data-bind="attr: {src: img_src}"></img></div><h1 class="title" data-bind="text: title, attr: {style: title_style}"></h1></div></li>', 2, 1, 2, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseiframe-default-memory-total" id="default-memory-total"><div class="outer-frame iframe"><iframe class="scaled-frame" data-bind="attr: {style: frame_style, src: frame_src}" allowfullscreen></iframe></div><div class="outer-image"><img class="img-frame" data-bind="attr: {src: img_src}"></img></div><h1 class="title" data-bind="text: title, attr: {style: title_style}"></h1></div></li>', 2, 1, 4, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseiframe-default-disk-total" id="default-disk-total"><div class="outer-frame iframe"><iframe class="scaled-frame" data-bind="attr: {style: frame_style, src: frame_src}" allowfullscreen></iframe></div><div class="outer-image"><img class="img-frame" data-bind="attr: {src: img_src}"></img></div><h1 class="title" data-bind="text: title, attr: {style: title_style}"></h1></div></li>', 2, 1, 6, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseiframe-default-uptime-host" id="default-uptime-host"><div class="outer-frame iframe"><iframe class="scaled-frame" data-bind="attr: {style: frame_style, src: frame_src}" allowfullscreen></iframe></div><div class="outer-image"><img class="img-frame" data-bind="attr: {src: img_src}"></img></div><h1 class="title" data-bind="text: title, attr: {style: title_style}"></h1></div></li>', 3, 1, 8, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseiframe-default-cpu-load" id="default-cpu-load"><div class="outer-frame iframe"><iframe class="scaled-frame" data-bind="attr: {style: frame_style, src: frame_src}" allowfullscreen></iframe></div><div class="outer-image"><img class="img-frame" data-bind="attr: {src: img_src}"></img></div><h1 class="title" data-bind="text: title, attr: {style: title_style}"></h1></div></li>', 9, 3, 2, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-nav-status" id="default-nav-status"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 6)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-nav-main"] = new basejavascript("default-nav-main", "", "default", {'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'precision': 0, 'fields': {'icon': '', 'title2': 'Home', 'icon_style': '', 'title': ''}, 'static_icons': [], 'namespace': 'default', 'widget_style': 'background: DARKSLATEBLUE;', 'icon_inactive': 'mdi-home-assistant', 'icons': {'icon_active': 'fas-spinner fa-spin', 'icon_inactive': 'mdi-home-assistant'}, 'use_hass_icon': 1, 'dashboard': 'Main', 'widget_type': 'basejavascript', 'use_comma': 0, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;background: DARKSLATEBLUE;'}})
    
        widgets["default-label"] = new basedisplay("default-label", "", "default", {'sub_entity': 'sensor.update_available', 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'text_style': 'color: #fff;font-size: 300%;'}, 'precision': 0, 'sub_entity_to_entity_attribute': '', 'entity_to_sub_entity_attribute': '', 'fields': {'state_text': '', 'title2': 'Status', 'unit': '', 'value': '', 'title': ''}, 'static_icons': [], 'entity': 'sensor.version_friendly', 'namespace': 'default', 'widget_style': 'background: MEDIUMSLATEBLUE;', 'static_css': {'title_style': 'color: #fff;', 'container_style': '', 'title2_style': 'letter-spacing: 0.35em;color: #fff;text-transform: uppercase;', 'widget_style': 'background-color: #444;background: MEDIUMSLATEBLUE;', 'state_text_style': 'padding-bottom:0.15em;background-color:MEDIUMSLATEBLUE;color: #fff;font-size:125%;'}, 'title2_style': 'letter-spacing: 0.35em;text-transform: uppercase;', 'icons': [], 'use_hass_icon': 1, 'text_style': 'font-size: 300%;', 'widget_type': 'basedisplay', 'use_comma': 0, 'state_text_style': 'padding-bottom:0.15em;background-color:MEDIUMSLATEBLUE;font-size:125%;'})
    
        widgets["default-reload"] = new basejavascript("default-reload", "", "default", {'use_hass_icon': 1, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'precision': 0, 'fields': {'icon': '', 'title2': 'Reload', 'icon_style': '', 'title': ''}, 'static_icons': [], 'command': 'location.reload(true)', 'namespace': 'default', 'widget_style': 'background: MEDIUMSLATEBLUE;', 'icons': {'icon_active': 'fas-spinner fa-spin', 'icon_inactive': 'fas-sync'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;background: MEDIUMSLATEBLUE;'}, 'widget_type': 'basejavascript', 'use_comma': 0})
    
        widgets["default-clock"] = new baseclock("default-clock", "", "default", {'time_format': '24hr', 'use_hass_icon': 1, 'css': {}, 'precision': 0, 'fields': {'date': '', 'time': ''}, 'static_icons': [], 'namespace': 'default', 'widget_style': 'background: DARKSLATEBLUE;', 'icons': [], 'static_css': {'widget_style': 'background-color: #444;background: DARKSLATEBLUE;', 'time_style': 'color: #aa00ff;', 'date_style': 'color: #fff;'}, 'widget_type': 'baseclock', 'use_comma': 0})
    
        widgets["default-nav-weather"] = new basejavascript("default-nav-weather", "", "default", {'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'precision': 0, 'fields': {'icon': '', 'title2': 'Wetter', 'icon_style': '', 'title': ''}, 'static_icons': [], 'namespace': 'default', 'widget_style': 'background: DARKSLATEBLUE;', 'icon_inactive': 'mdi-weather-partlycloudy', 'icons': {'icon_active': 'fas-spinner fa-spin', 'icon_inactive': 'mdi-weather-partlycloudy'}, 'use_hass_icon': 1, 'dashboard': 'Weather', 'widget_type': 'basejavascript', 'use_comma': 0, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;background: DARKSLATEBLUE;'}})
    
        widgets["default-cpu-use"] = new baseiframe("default-cpu-use", "", "default", {'url_list': ['http://192.168.178.10:3000/dashboard-solo/db/node-exporter-full?orgId=1&var-job=node&var-node=192.168.178.4&var-port=9100&from=1549220102637&to=1549223702637&theme=dark&panelId=20'], 'css': {}, 'precision': 0, 'widget_type': 'baseiframe', 'fields': {'img_src': '', 'frame_src': '', 'frame_style': '""', 'title': ''}, 'static_icons': [], 'namespace': 'default', 'static_css': {'title_style': 'background-color: rgba(0, 0, 0, 0.5);color: #fff;', 'widget_style': 'background-color: #444;'}, 'icons': [], 'use_hass_icon': 1, 'refresh': 180, 'use_comma': 0})
    
        widgets["default-memory-use"] = new baseiframe("default-memory-use", "", "default", {'url_list': ['http://192.168.178.10:3000/dashboard-solo/db/node-exporter-full?orgId=1&var-job=node&var-node=192.168.178.4&var-port=9100&from=1549220056711&to=1549223656711&theme=dark&panelId=16'], 'css': {}, 'precision': 0, 'widget_type': 'baseiframe', 'fields': {'img_src': '', 'frame_src': '', 'frame_style': '""', 'title': ''}, 'static_icons': [], 'namespace': 'default', 'static_css': {'title_style': 'background-color: rgba(0, 0, 0, 0.5);color: #fff;', 'widget_style': 'background-color: #444;'}, 'icons': [], 'use_hass_icon': 1, 'refresh': 180, 'use_comma': 0})
    
        widgets["default-disk-use"] = new baseiframe("default-disk-use", "", "default", {'url_list': ['http://192.168.178.10:3000/dashboard-solo/db/node-exporter-full?orgId=1&var-job=node&var-node=192.168.178.4&var-port=9100&panelId=154&from=1549220211338&to=1549223811339&theme=dark'], 'css': {}, 'precision': 0, 'widget_type': 'baseiframe', 'fields': {'img_src': '', 'frame_src': '', 'frame_style': '""', 'title': ''}, 'static_icons': [], 'namespace': 'default', 'static_css': {'title_style': 'background-color: rgba(0, 0, 0, 0.5);color: #fff;', 'widget_style': 'background-color: #444;'}, 'icons': [], 'use_hass_icon': 1, 'refresh': 180, 'use_comma': 0})
    
        widgets["default-grafana-logo"] = new baseiframe("default-grafana-logo", "", "default", {'namespace': 'default', 'static_css': {'title_style': 'background-color: rgba(0, 0, 0, 0.5);color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {}, 'static_icons': [], 'use_hass_icon': 1, 'widget_type': 'baseiframe', 'img_list': ['https://logz.io/wp-content/uploads/2017/02/monitoring-dockerized-elk-stack-1.jpg'], 'fields': {'img_src': '', 'frame_src': '', 'frame_style': '""', 'title': ''}, 'use_comma': 0, 'icons': [], 'precision': 0})
    
        widgets["default-nav-spacer"] = new basedisplay("default-nav-spacer", "", "default", {'namespace': 'default', 'widget_style': 'background: DARKSLATEBLUE;', 'css': {}, 'static_icons': [], 'static_css': {'title_style': 'color: #fff;', 'container_style': '', 'value_style': 'color: #fff;', 'unit_style': '', 'widget_style': 'background-color: #444;background: DARKSLATEBLUE;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;'}, 'widget_type': 'basedisplay', 'use_hass_icon': 1, 'fields': {'state_text': '', 'title2': '', 'unit': '', 'value': '', 'title': ''}, 'use_comma': 0, 'icons': [], 'precision': 0})
    
        widgets["default-cpu-cores"] = new baseiframe("default-cpu-cores", "", "default", {'namespace': 'default', 'static_css': {'title_style': 'background-color: rgba(0, 0, 0, 0.5);color: #fff;', 'widget_style': 'background-color: #444;'}, 'url_list': ['http://192.168.178.10:3000/dashboard-solo/db/node-exporter-full?orgId=1&var-job=node&var-node=192.168.178.4&var-port=9100&panelId=14&from=1549220536564&to=1549224136564&theme=dark'], 'css': {}, 'static_icons': [], 'use_hass_icon': 1, 'widget_type': 'baseiframe', 'fields': {'img_src': '', 'frame_src': '', 'frame_style': '""', 'title': ''}, 'use_comma': 0, 'icons': [], 'precision': 0})
    
        widgets["default-memory-total"] = new baseiframe("default-memory-total", "", "default", {'namespace': 'default', 'static_css': {'title_style': 'background-color: rgba(0, 0, 0, 0.5);color: #fff;', 'widget_style': 'background-color: #444;'}, 'url_list': ['http://192.168.178.10:3000/dashboard-solo/db/node-exporter-full?orgId=1&var-job=node&var-node=192.168.178.4&var-port=9100&panelId=75&from=1549220497990&to=1549224097990&theme=dark'], 'css': {}, 'static_icons': [], 'use_hass_icon': 1, 'widget_type': 'baseiframe', 'fields': {'img_src': '', 'frame_src': '', 'frame_style': '""', 'title': ''}, 'use_comma': 0, 'icons': [], 'precision': 0})
    
        widgets["default-disk-total"] = new baseiframe("default-disk-total", "", "default", {'namespace': 'default', 'static_css': {'title_style': 'background-color: rgba(0, 0, 0, 0.5);color: #fff;', 'widget_style': 'background-color: #444;'}, 'url_list': ['http://192.168.178.10:3000/dashboard-solo/db/node-exporter-full?orgId=1&var-job=node&var-node=192.168.178.4&var-port=9100&panelId=23&from=1549220455943&to=1549224055943&theme=dark'], 'css': {}, 'static_icons': [], 'use_hass_icon': 1, 'widget_type': 'baseiframe', 'fields': {'img_src': '', 'frame_src': '', 'frame_style': '""', 'title': ''}, 'use_comma': 0, 'icons': [], 'precision': 0})
    
        widgets["default-uptime-host"] = new baseiframe("default-uptime-host", "", "default", {'url_list': ['http://192.168.178.10:3000/dashboard-solo/db/node-exporter-full?orgId=1&var-job=node&var-node=192.168.178.4&var-port=9100&from=1549219934860&to=1549223534861&theme=dark&panelId=15'], 'css': {}, 'precision': 0, 'widget_type': 'baseiframe', 'fields': {'img_src': '', 'frame_src': '', 'frame_style': '""', 'title': ''}, 'static_icons': [], 'namespace': 'default', 'static_css': {'title_style': 'background-color: rgba(0, 0, 0, 0.5);color: #fff;', 'widget_style': 'background-color: #444;'}, 'icons': [], 'use_hass_icon': 1, 'refresh': 180, 'use_comma': 0})
    
        widgets["default-cpu-load"] = new baseiframe("default-cpu-load", "", "default", {'url_list': ['http://192.168.178.10:3000/dashboard-solo/db/node-exporter-full?panelId=7&orgId=1&from=1549221637486&to=1549225237486&var-job=node&var-node=172.19.0.4&var-port=9100&theme=dark'], 'css': {}, 'precision': 0, 'widget_type': 'baseiframe', 'fields': {'img_src': '', 'frame_src': '', 'frame_style': '""', 'title': ''}, 'static_icons': [], 'namespace': 'default', 'static_css': {'title_style': 'background-color: rgba(0, 0, 0, 0.5);color: #fff;', 'widget_style': 'background-color: #444;'}, 'icons': [], 'use_hass_icon': 1, 'refresh': 180, 'use_comma': 0})
    
        widgets["default-nav-status"] = new basejavascript("default-nav-status", "", "default", {'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'precision': 0, 'fields': {'icon': '', 'title2': 'Status', 'icon_style': '', 'title': ''}, 'static_icons': [], 'namespace': 'default', 'widget_style': 'background: MEDIUMSLATEBLUE;', 'icon_inactive': 'mdi-information-outline', 'icons': {'icon_active': 'fas-spinner fa-spin', 'icon_inactive': 'mdi-information-outline'}, 'use_hass_icon': 1, 'dashboard': 'Status', 'widget_type': 'basejavascript', 'use_comma': 0, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;background: MEDIUMSLATEBLUE;'}})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
        if (myTimeoutSticky) {
            myTimeout = setTimeout(function() { navigate(myTimeoutUrl); }, myTimeoutDelay);
        }
    });

    // Set up timeout

    var myTimeout;
    var myTimeoutUrl;
    var myTimeoutDelay;
    var myTimeoutSticky = 0;

    if (location.search != "")
    {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
        });

        if ("timeout" in result && "return" in result)
        {
            url = result.return
            argcount = 0
            for (arg in result)
            {
                if (arg != "timeout" && arg != "return" && arg != "sticky")
                {
                    if (argcount == 0)
                    {
                        url += "?";
                    }
                    else
                    {
                        url += "?";
                    }
                    argcount ++;
                    url += arg + "=" + result[arg]
                }
            }
            if ("sticky" in result)
            {
                myTimeoutSticky = (result.sticky == "1");
            }
            myTimeoutUrl = url;
            myTimeoutDelay = result.timeout * 1000;
            myTimeout = setTimeout(function() { navigate(url); }, result.timeout * 1000);
        }
    }

    // Start listening for HA Events
    if (location.protocol == 'https:')
    {
        wsprot = "wss:"
    }
    else
    {
        wsprot = "ws:"
    }
    var stream_url = wsprot + '//' + location.host + '/stream'
    ha_status(stream_url, "Status", widgets);

});
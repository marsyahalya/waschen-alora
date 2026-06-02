Add-Type -AssemblyName System.Drawing

function New-DummyPng {
    param(
        [string]$Path,
        [string]$Label,
        [string]$Sublabel,
        [int]$ColorR,
        [int]$ColorG,
        [int]$ColorB
    )

    $width = 800
    $height = 600
    $bmp = New-Object System.Drawing.Bitmap $width, $height
    $graphics = [System.Drawing.Graphics]::FromImage($bmp)
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias

    # Gradient background
    $rect = New-Object System.Drawing.Rectangle 0, 0, $width, $height
    $color1 = [System.Drawing.Color]::FromArgb(255, $ColorR, $ColorG, $ColorB)
    $darkR = [Math]::Max($ColorR - 60, 0)
    $darkG = [Math]::Max($ColorG - 60, 0)
    $darkB = [Math]::Max($ColorB - 60, 0)
    $color2 = [System.Drawing.Color]::FromArgb(255, $darkR, $darkG, $darkB)
    $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush $rect, $color1, $color2, 45
    $graphics.FillRectangle($brush, $rect)
    $brush.Dispose()

    # Subtle pattern dots
    $dotBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(30, 255, 255, 255))
    for ($x = 0; $x -lt $width; $x += 40) {
        for ($y = 0; $y -lt $height; $y += 40) {
            $graphics.FillEllipse($dotBrush, $x, $y, 3, 3)
        }
    }
    $dotBrush.Dispose()

    # Center icon circle
    $iconBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(60, 255, 255, 255))
    $iconPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(120, 255, 255, 255)), 3
    $graphics.FillEllipse($iconBrush, 330, 180, 140, 140)
    $graphics.DrawEllipse($iconPen, 330, 180, 140, 140)
    $iconBrush.Dispose()
    $iconPen.Dispose()

    # Main label
    $labelFont = New-Object System.Drawing.Font 'Segoe UI', 36, ([System.Drawing.FontStyle]::Bold)
    $textBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(245, 255, 255, 255))
    $stringFormat = New-Object System.Drawing.StringFormat
    $stringFormat.Alignment = [System.Drawing.StringAlignment]::Center
    $graphics.DrawString($Label, $labelFont, $textBrush, ($width / 2), 400, $stringFormat)
    $labelFont.Dispose()

    # Sublabel
    $subFont = New-Object System.Drawing.Font 'Segoe UI', 14, ([System.Drawing.FontStyle]::Regular)
    $subBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(160, 255, 255, 255))
    $graphics.DrawString($Sublabel, $subFont, $subBrush, ($width / 2), 470, $stringFormat)
    $subFont.Dispose()
    $subBrush.Dispose()
    $textBrush.Dispose()

    $bmp.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
    $graphics.Dispose()
    $bmp.Dispose()
    Write-Host "Created: $Path"
}

$targetDir = "$PSScriptRoot\..\src\assets\testimoni"

New-DummyPng -Path "$targetDir\haji.png" -Label "Acara Haji" -Sublabel "PILGRIM SUPPORT" -ColorR 31 -ColorG 122 -ColorB 77
New-DummyPng -Path "$targetDir\tni.png" -Label "Acara TNI" -Sublabel "MILITARY EVENT" -ColorR 58 -ColorG 74 -ColorB 58
New-DummyPng -Path "$targetDir\b2c.png" -Label "B2C Customer" -Sublabel "EVERYDAY LAUNDRY" -ColorR 252 -ColorG 128 -ColorB 24
New-DummyPng -Path "$targetDir\b2b-rs.png" -Label "B2B Rumah Sakit" -Sublabel "MEDICAL LINEN" -ColorR 30 -ColorG 90 -ColorB 138
New-DummyPng -Path "$targetDir\cleanox-rs.png" -Label "Cleanox Rumah Sakit" -Sublabel "DEEP CLEANING" -ColorR 14 -ColorG 138 -ColorB 138
New-DummyPng -Path "$targetDir\hospitality.png" -Label "Mitra Hospitality" -Sublabel "HOTEL PARTNER" -ColorR 73 -ColorG 18 -ColorB 46

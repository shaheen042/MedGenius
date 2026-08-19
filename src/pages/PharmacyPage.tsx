import React, { useState } from 'react';
import { 
  Pill, 
  MapPin, 
  Package, 
  Search, 
  Plus,
  Clock,
  TrendingUp,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Header } from '@/components/Header';

const mockInventory = [
  { 
    id: 1, 
    name: 'Amoxicillin 500mg', 
    category: 'Antibiotics', 
    stock: 150, 
    price: 12.99, 
    available: true,
    lastUpdated: '2 hours ago'
  },
  { 
    id: 2, 
    name: 'Ibuprofen 200mg', 
    category: 'Pain Relief', 
    stock: 5, 
    price: 8.49, 
    available: true,
    lastUpdated: '1 hour ago'
  },
  { 
    id: 3, 
    name: 'Lisinopril 10mg', 
    category: 'Blood Pressure', 
    stock: 0, 
    price: 15.99, 
    available: false,
    lastUpdated: '3 hours ago'
  },
  { 
    id: 4, 
    name: 'Metformin 850mg', 
    category: 'Diabetes', 
    stock: 75, 
    price: 22.50, 
    available: true,
    lastUpdated: '30 minutes ago'
  },
  { 
    id: 5, 
    name: 'Omeprazole 20mg', 
    category: 'Gastric', 
    stock: 25, 
    price: 18.99, 
    available: true,
    lastUpdated: '1 hour ago'
  },
];

const nearbyPharmacies = [
  { id: 1, name: 'Central Pharmacy', distance: '0.5 km', stock: 1200, available: 850 },
  { id: 2, name: 'HealthMart Plus', distance: '1.2 km', stock: 900, available: 750 },
  { id: 3, name: 'MediCare Corner', distance: '2.1 km', stock: 1500, available: 1100 },
  { id: 4, name: 'Quick Relief Pharmacy', distance: '2.8 km', stock: 800, available: 600 },
];

const PharmacyPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [inventory, setInventory] = useState(mockInventory);

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAvailability = (id: number) => {
    setInventory(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, available: !item.available }
          : item
      )
    );
  };

  const stats = [
    { title: 'Total Medicines', value: '1,247', icon: Package, color: 'primary' },
    { title: 'Available Stock', value: '956', icon: CheckCircle, color: 'success' },
    { title: 'Low Stock Items', value: '23', icon: AlertCircle, color: 'warning' },
    { title: 'Daily Orders', value: '145', icon: TrendingUp, color: 'accent' },
  ];

  const getStockStatus = (stock: number) => {
    if (stock === 0) return { label: 'Out of Stock', variant: 'destructive' as const };
    if (stock < 20) return { label: 'Low Stock', variant: 'secondary' as const };
    return { label: 'In Stock', variant: 'default' as const };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <Header />
      
      <div className="container max-w-screen-2xl mx-auto p-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Pharmacy Dashboard</h1>
          <p className="text-muted-foreground">Manage inventory and track medicine availability</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className="bg-gradient-card shadow-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-${stat.color}/10`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Inventory Management */}
          <Card className="bg-gradient-card shadow-medical border-0">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <CardTitle className="text-xl font-semibold">Medicine Inventory</CardTitle>
                <Button variant="medical" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Medicine
                </Button>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search medicines..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {filteredInventory.map((item) => {
                  const stockStatus = getStockStatus(item.stock);
                  return (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/50">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground">{item.name}</h4>
                          <Badge variant={stockStatus.variant}>
                            {stockStatus.label}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{item.category} • ${item.price}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Package className="h-3 w-3" />
                          Stock: {item.stock} units
                          <Clock className="h-3 w-3 ml-2" />
                          Updated: {item.lastUpdated}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-xs text-muted-foreground mb-1">Available</div>
                          <Switch
                            checked={item.available}
                            onCheckedChange={() => toggleAvailability(item.id)}
                          />
                        </div>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Nearby Pharmacies Map */}
          <Card className="bg-gradient-card shadow-medical border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                Nearby Pharmacy Network
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Simulated Map */}
              <div className="bg-muted/30 rounded-lg h-48 mb-4 flex items-center justify-center border-2 border-dashed border-border">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive map showing pharmacy locations</p>
                  <p className="text-sm text-muted-foreground">Real-time inventory sharing network</p>
                </div>
              </div>

              {/* Pharmacy List */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Connected Pharmacies</h4>
                {nearbyPharmacies.map((pharmacy) => (
                  <div key={pharmacy.id} className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/50">
                    <div>
                      <div className="font-medium text-foreground">{pharmacy.name}</div>
                      <div className="text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 inline mr-1" />
                        {pharmacy.distance}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-foreground">
                        {pharmacy.available}/{pharmacy.stock}
                      </div>
                      <div className="text-xs text-muted-foreground">Available/Total</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Real-time Updates */}
        <Card className="bg-gradient-card shadow-medical border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              Real-time Medicine Updates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { medicine: 'Aspirin 100mg', status: 'High Demand', change: '+15%', color: 'warning' },
                { medicine: 'Insulin Pen', status: 'Critical Stock', change: '-80%', color: 'destructive' },
                { medicine: 'Vitamin D3', status: 'Well Stocked', change: '+5%', color: 'success' },
                { medicine: 'Blood Pressure Monitor', status: 'New Arrival', change: 'New', color: 'primary' },
              ].map((update, index) => (
                <div key={index} className="p-4 bg-background/50 rounded-lg border border-border/50">
                  <div className="font-medium text-foreground text-sm mb-1">{update.medicine}</div>
                  <div className="flex items-center justify-between">
                    <Badge variant={update.color === 'warning' ? 'secondary' : update.color === 'destructive' ? 'destructive' : 'default'}>
                      {update.status}
                    </Badge>
                    <span className={`text-sm font-medium text-${update.color}`}>
                      {update.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-card shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Bulk Update</h3>
                  <p className="text-sm text-muted-foreground">Update multiple items</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Bulk Operations
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-success/10">
                  <TrendingUp className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Sales Analytics</h3>
                  <p className="text-sm text-muted-foreground">View performance metrics</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                View Reports
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <AlertCircle className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Low Stock Alerts</h3>
                  <p className="text-sm text-muted-foreground">Manage notifications</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Configure Alerts
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PharmacyPage;